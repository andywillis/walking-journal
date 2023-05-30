/**
 * getWalks
 *
 * Takes an array of walk objects and returns a
 * new array of minimal walk objects
 *
 * @param {array} walks - array of walks
 * @return {array}
 */
function getWalks(walks) {
	return walks.map(walk => {
		const { id, name, distance, unit } = walk;
		return { id, name, distance, unit };
	});
}

export default getWalks;
