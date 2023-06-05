/**
 * createAppRouteName
 *
 * @export
 * @param {String} name
 * @return {String}
 */
function createAppRouteName(name) {
	return name.replace(/,'"\./, '').replaceAll(/\s/g, '-').toLowerCase();
}

export default createAppRouteName;
