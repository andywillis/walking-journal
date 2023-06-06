import fs from 'fs/promises';

export const formatter = new Intl.DateTimeFormat('en-GB');

/**
 * convertArgs
 *
 * @export
 * @param {Array} args
 * @return {Object}
 */
export function convertArgs(args) {
	return args.slice(2).reduce((acc, c) => {
		const [ key, value ] = c.split('=');
		acc[key] ??= value;
		return acc;
	}, {});
}

/**
 * loadAndParse
 *
 * @export
 * @param {String} inputPath
 * @param {String} inputFile
 * @return {Promise}
 */
export async function loadAndParse(inputPath, inputFile) {
	try {
		const data = JSON.parse(await fs.readFile(`${inputPath}/${inputFile}`));
		return data;
	} catch (err) {
		console.error(err);
	}
}

/**
 * filterGeoJson
 *
 * @export
 * @param {String} inputFile
 * @return {Boolean}
 */
export function filterGeoJson(inputFile) {
	return inputFile.endsWith('.geojson');
}

/**
 * createshortname
 *
 * @export
 * @param {String} name
 * @return {String}
 */
export function createshortname(name) {
	return name.replace(/,'"\./, '').replaceAll(/\s/g, '-').toLowerCase();
}

/**
 * buildRouteObject
 *
 * @export
 * @param {Number} id
 * @param {Object} data
 * @param {Object} args
 * @return {Object}
 */
export function buildRouteObject(id, data, args) {

	const { name, town, county } = args;

	const date = formatter.format(new Date(data.features[0].properties.time));
	
	return {
		id,
		name,
		appRouteTitle: createshortname(name),
		town,
		county,
		dates: [date],
		style: {
			route: {
				color: 'orange'
			}
		},
		route: {
			...data,
			features: [{
				type: 'Feature',
				geometry: {
					type: 'LineString',
					coordinates: data.features.map(feature => {
						return feature.geometry.coordinates;
					})
				}
			}]
		},
		routeMarkers: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						name: 'Start',
						number: '1',
						description: ''
					},
					geometry: {
						type: 'Point',
						coordinates: data.features.at(0).geometry.coordinates
					}
				},
				{
					type: 'Feature',
					properties: {
						name: 'Finish',
						number: '2',
						description: ''
					},
					geometry: {
						type: 'Point',
						coordinates: data.features.at(-1).geometry.coordinates
					}
				}
			]
		},
		landmarkMarkers: {
			type: 'FeatureCollection',
			features: []
		}
	};
}
