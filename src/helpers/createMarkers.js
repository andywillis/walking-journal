import * as L from 'leaflet';

/**
 * createMarkers
 *
 * @param {array} data
 * @param {boolean} darkMode
 * @return {array}
 */
function createMarkers(data, darkMode) {

	return data.map(marker => {

		const {
			geometry: { coordinates },
			properties: { icons }
		} = marker;
	
		console.log(darkMode, icons[darkMode ? 'dark' : 'light']);

		const [ lng, lat ] = coordinates;
	
		return L.marker([ lat, lng ], {
			icon: L.divIcon({
				html: icons[darkMode ? 'dark' : 'light'],
				className: ''
			})
		});
	
	});

}

export default createMarkers;
