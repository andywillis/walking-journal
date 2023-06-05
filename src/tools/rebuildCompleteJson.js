import fs from 'fs/promises';

import {
	addLandmarkIcons,
	addRouteIcons,
	addPrologue,
	buildRouteObject,
	convertArgs,
	getFullWalkDistance,
	loadAndParse,
	filterGeoJson,
	formatter
} from './helpers/index.js';

import rootname from '../../rootname.js';

const archivePath = `${rootname}/src/data/archive`;
const walkdataInputPath = `${rootname}/src/data`;
const outputPath = `${rootname}/src/data`;
const newRoutesInputPath = `${rootname}/src/tools/input`;
const newRoutesInputFiles = await fs.readdir(newRoutesInputPath);

const args = convertArgs(process.argv);

// Load last saved walkdata.json
const walkdata = JSON.parse(await fs.readFile(`${walkdataInputPath}/walkdata.json`, 'utf8'));

// Archive it
const archiveFilename = `walkdata_${formatter.format(new Date()).replaceAll('/', '-')}.json`;
await fs.writeFile(`${archivePath}/${archiveFilename}`, JSON.stringify(walkdata, null, 2), 'utf8');
console.log('Archive file written');

const { walks } = walkdata;

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

await fs.writeFile(`${outputPath}/walkdata.json`, JSON.stringify(addedPrologue, null, 2), 'utf8');
console.log('New app-ready geoJson file written');
