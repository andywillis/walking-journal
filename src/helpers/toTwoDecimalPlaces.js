/**
 * toTwoDecimalPlaces
 *
 * @param {Number} distance
 * @return {Number}
 */
function toTwoDecimalPlaces(distance) {
	return Number.parseFloat((Math.round(distance * 100) / 100).toFixed(2));
}

export default toTwoDecimalPlaces;
