import fs from 'fs/promises';

import rootname from '../../rootname';

import { getFullWalkDistance } from '../helpers';

const data = JSON.parse(await fs.readFile(`${rootname}/src/data/geodata.json`, 'utf8'));

const newData = getFullWalkDistance(data, 'mi');

await fs.writeFile(`${rootname}/src/data/geodata_distance.json`, JSON.stringify(newData), 'utf8');

console.log('File written');
