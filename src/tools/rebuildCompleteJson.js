import fs from 'fs/promises';

import {
	buildRouteObject,
	convertArgs,
	loadAndParse,
	filterGeoJson,
	formatter
} from './helpers/routeConverter_helpers.js';

import rootname from '../../rootname.js';
import addLandmarkIcons from './helpers/addLandmarkIcons.js';
import addRouteIcons from './helpers/addRouteIcons.js';
import getFullWalkDistance from './helpers/getFullWalkDistance.js';
import addPrologue from './helpers/addPrologue.js';

const archivePath = `${rootname}/src/data/archive`;
const geoDataInputPath = `${rootname}/src/data`;
const outputPath = `${rootname}/src/data`;
// const outputPath = `${rootname}/src/tools/output`;
const newRoutesInputPath = `${rootname}/src/tools/input`;
const newRoutesInputFiles = await fs.readdir(newRoutesInputPath);

const args = convertArgs(process.argv);

// Load last saved geoData.json
const geoData = JSON.parse(await fs.readFile(`${geoDataInputPath}/geodata.json`, 'utf8'));

// Archive it
const archiveFilename = `geoData_${formatter.format(new Date()).replaceAll('/', '-')}.json`;
await fs.writeFile(`${archivePath}/${archiveFilename}`, JSON.stringify(geoData, null, 2), 'utf8');
console.log('Archive file written');

const { walks } = geoData;

let lastId = walks.length;

const data = await Promise.all(
	newRoutesInputFiles
		.filter(filterGeoJson)
		.map(inputFile => loadAndParse(newRoutesInputPath, inputFile))
);

data.forEach(data => {
	const obj = buildRouteObject(++lastId, data, args);
	walks.push(obj);
});

const addedFullWalkDistance = getFullWalkDistance(walks, 'mi');
const addedLandmarkIcons = addLandmarkIcons(addedFullWalkDistance);
const addedRouteIcons = addRouteIcons(addedLandmarkIcons);
const addedPrologue = addPrologue(addedRouteIcons, 'mi');

await fs.writeFile(`${outputPath}/geoData.json`, JSON.stringify(addedPrologue, null, 2), 'utf8');
console.log('New app-ready geoJson file written');
