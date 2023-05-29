import fs from 'fs/promises';

const inputPath = './input';
const outputPath = './output';
const formatter = new Intl.DateTimeFormat('en-GB');

const folder = await fs.readdir(inputPath);

const id = process.argv[2];
const name = process.argv[3];
const town = process.argv[4];
const county = process.argv[5];

const args = process.argv.slice(2).reduce((acc, c) => {
  const [ key, value ] = c.split('=');
  acc[key] ??= value;
  return acc;
}, {});

for (const file of folder) {
  const data = JSON.parse(await fs.readFile(`${inputPath}/${file}`));
  const converted = convertGpsPointsToLineString(data, args);
  await fs.writeFile(`${outputPath}/${file}`, JSON.stringify(converted, null, 2), 'utf8');
  console.log('Converted file written to output folder');
}

function convertGpsPointsToLineString(data, { id, name, town, county }) {
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
  }
}

export default convertGpsPointsToLineString;
