import fs from 'fs/promises';

import {
	buildRouteObject,
	convertArgs,
	loadAndParse,
	filterGeoJson
} from '../src/tools/helpers';

import rootname from '../rootname.js';

const geoDataPath = `${rootname}/src/data`;
const inputPath = `${rootname}/src/tools/input`;
const outputPath = `${rootname}/src/tools/output`;

const geoData = JSON.parse(await fs.readFile(`${geoDataPath}/geodata.json`, 'utf8'));
const inputFiles = await fs.readdir(inputPath);

const args = convertArgs(process.argv);

let lastId = geoData.length;

const data = await Promise.all(
	inputFiles
		.filter(filterGeoJson)
		.map(inputFile => loadAndParse(inputPath, inputFile))
);

data.forEach(data => {
	const obj = buildRouteObject(++lastId, data, args);
	geoData.push(obj);
});

await fs.writeFile(`${outputPath}/geoData.json`, JSON.stringify(geoData, null, 2), 'utf8');
console.log('Converted file written to output folder');
