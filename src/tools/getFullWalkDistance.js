// @ts-nocheck

import getGeoDataDistance from './getGeoDataDistance';

function getFullWalkDistance(data, unit) {
	return data.map(obj => {
		
		const { coordinates } = obj.route.features[0].geometry;
		let distance = 0;

		for (let i = 1; i < coordinates.length; i++) {
			distance += getGeoDataDistance(coordinates[i - 1], coordinates[i], unit);
		}
		return {
			...obj,
			distance: Number.parseFloat((Math.round(distance * 100) / 100).toFixed(2)),
			unit
		};
	});
}

export default getFullWalkDistance;
