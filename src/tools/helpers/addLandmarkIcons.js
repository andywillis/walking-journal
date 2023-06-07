import { buildLandmarkIconSvg } from './buildLandmarkIconSvg';

import iconData from './iconset-all_maki_icons.json' assert { type: 'json'};

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
					
					const {
						properties: { icon }
					} = feature;

					const icons = {
						light: buildLandmarkIconSvg({ path: svgs[`${icon}.svg`].pathData[0].d, mode: 'light' }),
						dark: buildLandmarkIconSvg({ path: svgs[`${icon}.svg`].pathData[0].d, mode: 'dark' })
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
