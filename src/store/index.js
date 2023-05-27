import { signal } from '@preact/signals';

// import data from '../data/20230526162932.json';
import data from '../data/geodata.json';

import { getWalks } from '../helpers';

export const darkMode = signal(false);

export const geoData = signal(data);

export const walks = signal(getWalks());

export const currentWalk = signal(2);
