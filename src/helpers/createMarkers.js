import * as L from 'leaflet';

import geoGraphIcon from '../assets/images/icons/geograph.ico';

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
			properties: { name, icons, description, osGridRef }
		} = markerData;
	
		const [ lng, lat ] = coordinates;
	
		const popupHtml = `
			<b>${name}</b><br/><br/>
			${description}<br/><br/>
			<section style="display: flex; align-items: center;">
				<img style="margin-right: 0.25rem;" title="www.geograph.org.uk icon" src="${geoGraphIcon}" /><a target="_blank" style="font-size: 0.8rem;" href="https://www.geograph.org.uk/browse.php?q=${osGridRef}">${osGridRef}</a></a>
			</section>
		`;

		const marker = L.marker([ lat, lng ], {
			icon: L.divIcon({
				html: icons[darkMode ? 'dark' : 'light'],
				className: ''
			})
		}).bindPopup(popupHtml);
	
		return marker;

	});

}

export default createMarkers;
