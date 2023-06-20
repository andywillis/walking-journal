import { effect, signal, computed } from '@preact/signals';

import { toTwoDecimalPlaces } from '../helpers';

import data from '../data/walkdata.json';

// Signals

export const themeMode = signal(localStorage.getItem('theme') || 'light');

export const store = signal(data);

export const walks = signal(store.value.walks);

export const selectedWalk = signal(walks.value[0].shortname);

export const visibleGroup = signal(undefined);

// Computed

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

// Effects

effect(() => {
	localStorage.setItem('theme', themeMode.value);
});
