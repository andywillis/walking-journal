/**
 * getWalks
 *
 * Takes an array of walk objects and returns a
 * new array of minimal walk objects
 *
 * @param {array} walks - array of walks
 * @return {array}
 */
function getWalks(store) {
	return store.walks.map(walk => {
		const { id, name, distance, unit, dates } = walk;
		return { id, name, distance, unit, dates };
	});
}

export default getWalks;
