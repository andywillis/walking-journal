import fs from 'fs/promises';

import rootname from '../../rootname.js';

import addLandmarkIcons from './helpers/addLandmarkIcons.js';
import addRouteIcons from './helpers/addRouteIcons.js';
import getFullWalkDistance from './helpers/getFullWalkDistance.js';
import addPrologue from './helpers/addPrologue.js';

const inputPath = `${rootname}/src/tools/output`;
// const outputPath = `${rootname}/src/data`;
const outputPath = `${rootname}/src/tools/output`;

const data = JSON.parse(await fs.readFile(`${inputPath}/geodata.json`, 'utf8'));

const addedFullWalkDistance = getFullWalkDistance(data, 'mi');
const addedLandmarkIcons = addLandmarkIcons(addedFullWalkDistance);
const addedRouteIcons = addRouteIcons(addedLandmarkIcons);
const addedPrologue = addPrologue(addedRouteIcons, 'mi');
// const newData =
// addPrologue(addRouteIcons(addLandmarkIcons(getFullWalkDistance(data, 'mi'))), 'mi');

await fs.writeFile(`${outputPath}/geoData_full.json`, JSON.stringify(addedPrologue, null, 2), 'utf8');
console.log('File written');
