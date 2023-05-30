/**
 * createNumberIcon
 *
 * @param {number} number
 * @param {number} [size=1]
 * @param {string} [mode="light"]
 * @return {string}
 */
function buildSvg(number, mode = 'light') {
	return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
			<rect fill="none" x="0" y="0" width="28" height="28" />
			<circle cx="14" cy="14" r="14" fill="${mode === 'light' ? '#333' : '#fcfcfc'}" />
			<circle cx="14" cy="14" r="12" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" />
			<text x="14" y="19" text-anchor="middle" alignment-baseline="middle" fill="${mode === 'light' ? '#333' : '#fcfcfc'}" style="font-size: 0.9rem; font-weight:400">${number}</text>
		</svg>
		`.trim().replace(/\n\t+/g, '');
}

/**
 * addRouteIcons
 *
 * @param {array} data
 * @return {array}
 */
function addRouteIcons(data) {
	return data.map(obj => {

		return {

			...obj,

			routeMarkers: {

				...obj.markers,

				features: obj.routeMarkers.features.map(feature => {

					const { properties: { number } } = feature;

					const icons = {
						light: buildSvg(number, 'light'),
						dark: buildSvg(number, 'dark')
					};

					return {
						...feature,
						properties: {
							...feature.properties,
							icons
						}
					};

				})

			}
		};

	});
}

export default addRouteIcons;
