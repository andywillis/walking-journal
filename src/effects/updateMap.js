import * as L from 'leaflet';

/**
 * updateMap
 *
 * Accepts a set of geodata, the current walk value,
 * the dark mode value, and the map reference, and uses that
 * information to add routes and markers to the map
 *
 * @param {object} geoData
 * @param {number} currentWalk
 * @param {boolean} darkMode
 * @param {object} mapRef
 */
function updateMap(geoData, currentWalk, darkMode, mapRef) {

	const walk = geoData.find(obj => {
		return obj.id === currentWalk;
	});

	const route = L.geoJSON(walk.route, {
		style: {
			color: 'var(--orange-6)',
			weight: 5,
			opacity: 0.65
		}
	});

	const featureMarkers = walk.featureMarkers.features.map(marker => {

		const {
			geometry: { coordinates },
			properties: { icons }
		} = marker;

		const [ lng, lat ] = coordinates;

		return L.marker([ lat, lng ], {
			icon: L.divIcon({
				html: icons[darkMode ? 'dark' : 'light']
			})
		});

	});

	const routeMarkers = walk.routeMarkers.features.map(marker => {

		const {
			geometry: { coordinates },
			properties: { icons }
		} = marker;

		const [ lng, lat ] = coordinates;

		return L.marker([ lat, lng ], {
			icon: L.divIcon({
				html: icons[darkMode ? 'dark' : 'light']
			})
		});

	});

	L.featureGroup([ route, ...featureMarkers, ...routeMarkers ]).addTo(mapRef.current);

	mapRef.current.fitBounds(route.getBounds());

}

export default updateMap;
