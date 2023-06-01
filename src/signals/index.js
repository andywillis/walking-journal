import { signal } from '@preact/signals';

import data from '../data/geodata_full.json';

import { getWalks } from '../helpers';

// Signals

export const darkMode = signal(false);

export const geoData = signal(data.walks);

export const walks = signal(getWalks(geoData.value));

export const currentWalk = signal(1);

export const totalDistance = signal({
	amount: data.totalDistance,
	unit: data.unit
});
