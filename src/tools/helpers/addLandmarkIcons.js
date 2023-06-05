import iconData from './iconset-all_maki_icons.json' assert { type: 'json'};

/**
 * buildSvg
 *
 * @param {string} path
 * @param {object} SvgProps { strokeColor, bgColor }
 * @return {string}
 */
function buildSvg(path, mode = 'light') {
	return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" height="34" width="34" class="marker">
			<rect fill="none" x="0" y="0" width="34" height="34" />
			<rect x="1" y="1" rx="4" ry="4" width="31" height="31" stroke="${mode === 'light' ? '#333' : '#fcfcfc'}" style="stroke-linejoin:round;stroke-miterlimit:4;" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" stroke-width="3" />
			<rect x="1" y="1" width="31" height="31" rx="4" ry="4" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" />
			<path fill="${mode === 'light' ? '#333' : '#fcfcfc'}" transform="translate(9 9)" d="${path}" />
		</svg>
	`.trim().replace(/\n\t+/g, '');
}

/**
 * addLandmarkIcons
 *
 * @param {array} data
 * @return {array}
 */
function addLandmarkIcons(data) {
	return data.map(obj => {

		if (!obj.landmarkMarkers) return obj;

		return {

			...obj,

			landmarkMarkers: {

				...obj.markers,

				features: obj.landmarkMarkers.features.map(feature => {

					const { svgs } = iconData.iconGroups[0];
					const { properties: { icon } } = feature;

					const icons = {
						light: buildSvg(svgs[`${icon}.svg`].pathData[0].d, 'light'),
						dark: buildSvg(svgs[`${icon}.svg`].pathData[0].d, 'dark')
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

export default addLandmarkIcons;