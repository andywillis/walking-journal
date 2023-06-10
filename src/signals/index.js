import { signal, computed } from '@preact/signals';

import toTwoDecimalPlaces from '../helpers/toTwoDecimalPlaces';

import data from '../data/walkdata.json';

// Signals

export const darkMode = signal(false);

export const store = signal(data);

export const walks = computed(() => {
	return store.value.walks;
});

export const selectedWalk = signal(store.value.walks[0].shortname);

export const selectedUrl = signal(undefined);

export const totalDistance = computed(() => {
	
	const { walks, unit } = store.value;
	
	const distance = walks.reduce((acc, walk) => {
		const { distance, dates } = walk;
		acc += (distance * dates.length);
		return acc;
	}, 0);
	
	return { distance: toTwoDecimalPlaces(distance), unit };

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

export const visibleGroup = signal(undefined);
