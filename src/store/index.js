import { signal } from '@preact/signals';

import data from '../data/geodata.json';

export const darkMode = signal(false);

export const geoData = signal(data);
