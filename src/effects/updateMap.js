import * as L from 'leaflet';

import { visibleGroup } from '../signals';

import { createMarkers } from '../helpers';

/**
 * updateMap
 *
 * Accepts a set of geodata, the selected walk value,
 * the dark mode value, and the map reference, and uses that
 * information to add routes and markers to the map
 *
 * @param {object} geoData
 * @param {string} selectedWalk
 * @param {boolean} darkMode
 * @param {object} mapRef
 */
function updateMap(walks, selectedWalk, darkMode, mapRef) {

	// Remove the visible group
	if (visibleGroup.peek()) visibleGroup.peek().remove();

	const walk = walks.find(obj => {
		return obj.shortname === selectedWalk;
	});

	const route = L.geoJSON(walk.route, {
		style: {
			color: 'var(--orange-6)',
			weight: 5,
			opacity: 0.65
		}
	});

	const group = L.featureGroup([route]);

	if (walk.landmarkMarkers) {
		const landmarkMarkers = createMarkers(walk.landmarkMarkers.features, darkMode);
		landmarkMarkers.forEach(marker => marker.addTo(group));
	}

	if (walk.routeMarkers) {
		const routeMarkers = createMarkers(walk.routeMarkers.features, darkMode);
		routeMarkers.forEach(marker => marker.addTo(group));
	}

	// Add the current group to state
	visibleGroup.value = group;

	group.addTo(mapRef.current);

	mapRef.current.fitBounds(group.getBounds());

}

export default updateMap;
