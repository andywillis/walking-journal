import fs from 'fs/promises';

import rootname from '../../rootname';

import addIcons from './addIcons';
import getFullWalkDistance from './getFullWalkDistance';

const data = JSON.parse(await fs.readFile(`${rootname}/src/data/geodata.json`, 'utf8'));

const newData = addIcons(getFullWalkDistance(data, 'mi'));

await fs.writeFile(`${rootname}/src/data/geodata_full.json`, JSON.stringify(newData, null, 2), 'utf8');

console.log('File written');
