import createAppRouteName from './createAppRouteName.js';
import formatter from './formatter.js';

/**
 * buildRouteObject
 *
 * @export
 * @param {Number} id
 * @param {Object} data
 * @param {Object} args
 * @return {Object}
 */
function buildRouteObject(id, data, args) {

	const { name, town, county } = args;

	const date = formatter.format(new Date(data.features[0].properties.time));
	
	return {
		id,
		name,
		appRouteTitle: createAppRouteName(name),
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

export default buildRouteObject;
