import fs from 'fs/promises';

const formatter = new Intl.DateTimeFormat('en-GB');

function convertGpsPointsToLineString(data, args) {

	const { id, name, town, county } = args;

	const date = formatter.format(new Date(data.features[0].properties.time));
	return {
		id: Number(id),
		name,
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
		markers: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {
						icons: {
							png: {
								name: 'start'
							},
							maki: {
								name: 'circle-stroked'
							}
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							1.3823466660461747,
							51.14776960154373
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						icons: {
							png: {
								name: 'finish'
							},
							maki: {
								name: 'circle'
							}
						}
					},
					geometry: {
						type: 'Point',
						coordinates: [
							1.3823466660461747,
							51.14776960154373
						]
					}
				},
				{
					type: 'Feature',
					properties: {
						icons: {
							png: {
								name: 'tree'
							},
							maki: {
								name: 'natural'
							}
						},
						label: 'Majesty Oak',
						description: '700 year-old Oak'
					},
					geometry: {
						type: 'Point',
						coordinates: [
							1.371146633986384,
							51.140433869437096
						]
					}
				}
			]
		}
	};
}

const inputPath = './input';
const outputPath = './output';
const folder = await fs.readdir(inputPath);

const args = process.argv.slice(2).reduce((acc, c) => {
	const [ key, value ] = c.split('=');
	acc[key] ??= value;
	return acc;
}, {});

// eslint-disable-next-line no-restricted-syntax
for (const file of folder) {
	
	// eslint-disable-next-line no-await-in-loop
	const json = await fs.readFile(`${inputPath}/${file}`);
	const data = JSON.parse(json.toString());
	const converted = convertGpsPointsToLineString(data, args);
	
	// eslint-disable-next-line no-await-in-loop
	await fs.writeFile(`${outputPath}/${file}`, JSON.stringify(converted, null, 2), 'utf8');
	console.log('Converted file written to output folder');
}
