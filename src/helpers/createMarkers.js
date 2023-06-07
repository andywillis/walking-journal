import * as L from 'leaflet';

/**
 * createMarkers
 *
 * @param {array} data
 * @param {boolean} darkMode
 * @return {array}
 */
function createMarkers(data, darkMode) {

	return data.map(markerData => {

		const {
			geometry: { coordinates },
			properties: { icons, description }
		} = markerData;
	
		const [ lng, lat ] = coordinates;
	
		const marker = L.marker([ lat, lng ], {
			icon: L.divIcon({
				html: icons[darkMode ? 'dark' : 'light'],
				className: ''
			})
		}).bindPopup(description);
	
		return marker;

	});

}

export default createMarkers;
