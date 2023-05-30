import { toTwoDecimalPlaces } from './getFullWalkDistance';

/**
 * addPrologue
 *
 * @param {array} data
 * @param {string} [unit='mi']
 * @return {object}
 */
function addPrologue(data, unit = 'mi') {
	
	const totalDistance = toTwoDecimalPlaces(data.reduce((acc, walk) => {
		acc += walk.distance;
		return acc;
	}, 0));
	
	return {
		name: 'Walks',
		version: '0.0.1',
		totalDistance,
		unit,
		walks: data
	};

}

export default addPrologue;
