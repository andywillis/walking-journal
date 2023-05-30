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
			<rect x="1" y="1" rx="4" ry="4" width="31" height="31" stroke="${mode === 'light' ? '#fcfcfc' : '#333'}" style="stroke-linejoin:round;stroke-miterlimit:4;" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" stroke-width="3"></rect>
			<rect x="1" y="1" width="31" height="31" rx="4" ry="4" fill="${mode === 'light' ? '#333' : '#fcfcfc'}"></rect>
			<path fill="${mode === 'light' ? '#fcfcfc' : '#333'}" transform="translate(9 9)" d="${path}"></path>
		</svg>
	`.trim().replace(/\n\t+/g, '');
}

/**
 * addFeatureIcons
 *
 * @param {array} data
 * @return {array}
 */
function addFeatureIcons(data) {
	return data.map(obj => {

		return {

			...obj,

			featureMarkers: {

				...obj.markers,

				features: obj.featureMarkers.features.map(feature => {

					const { svgs } = iconData.iconGroups[0];
					const { properties: { icon } } = feature;

					const icons = {
						light: buildSvg(svgs[`${icon}.svg`].pathData[0].d, { strokeColor: '#333', bgColor: '#fcfcfc' }),
						dark: buildSvg(svgs[`${icon}.svg`].pathData[0].d, { strokeColor: '#fcfcfc', bgColor: '#333' })
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

export default addFeatureIcons;
