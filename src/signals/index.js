import { signal } from '@preact/signals';

import data from '../data/geodata_full.json';

import { getWalks } from '../helpers';

export const darkMode = signal(false);
export const geoData = signal(data.walks);
export const walks = signal(getWalks(geoData.value));
export const currentWalk = signal(1);
