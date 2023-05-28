import fs from 'fs/promises';

import { getFullWalkDistance } from '../helpers';

import data from '../data/geodata.json' assert { type: 'json' };

const newData = getFullWalkDistance(data, 'mi');

await fs.writeFile('../data/geodata_distance.json', JSON.stringify(newData, null, 2), 'utf8');

console.log('File written');
