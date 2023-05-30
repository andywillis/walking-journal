import iconData from './iconset-all_maki_icons.json' assert { type: 'json'};

/**
 * buildSvg
 *
 * @param {string} path
 * @param {object} SvgProps { strokeColor, bgColor }
 * @return {string}
 */
function buildSvg(name, path, { strokeColor, bgColor }) {
	return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" height="34" width="34" class="marker">
		<title>${name}</title>
		<rect fill="none" x="0" y="0" width="34" height="34"></rect>
		<rect x="1" y="1" rx="4" ry="4" width="31" height="31" stroke="${strokeColor}" style="stroke-linejoin:round;stroke-miterlimit:4;" fill="${strokeColor}" stroke-width="3"></rect>
		<rect x="1" y="1" width="31" height="31" rx="4" ry="4" fill="${bgColor}"></rect>
		<path fill="${strokeColor}" transform="translate(9 9)" d="${path}"></path>
	</svg>
	`.trim().replace(/\n\s+/g, '');
}

/**
 * addIcons
 *
 * @param {array} data
 * @return {array}
 */
function addIcons(data) {
	return data.map(obj => {

		return {

			...obj,

			markers: {

				...obj.markers,

				features: obj.markers.features.map(feature => {

					const { svgs } = iconData.iconGroups[0];
					const { properties: { name, icons } } = feature;

					icons.svg = {
						...icons.svg,
						html: {
							light: buildSvg(name, svgs[`${icons.maki.name}.svg`].pathData[0].d, { strokeColor: '#333', bgColor: '#fcfcfc' }),
							dark: buildSvg(name, svgs[`${icons.maki.name}.svg`].pathData[0].d, { strokeColor: '#fcfcfc', bgColor: '#333' })
						}
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

export default addIcons;
