import { signal, computed } from '@preact/signals';

import data from '../data/geodata_full.json';

// Signals

export const darkMode = signal(false);

export const store = signal(data);

export const totalDistance = computed(() => {
	const { totalDistance, unit } = store.value;
	return { distance: totalDistance, unit };
});

export const walks = computed(() => {
	return store.value.walks;
});

export const totalWalks = computed(() => {
	return walks.value.length;
});

export const totalJourneys = computed(() => {
	return walks.value.reduce((acc, walk) => {
		acc += walk.dates.length;
		return acc;
	}, 0);
});

export const currentWalk = signal(1);
