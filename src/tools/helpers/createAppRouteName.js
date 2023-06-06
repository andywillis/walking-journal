/**
 * createshortname
 *
 * @export
 * @param {String} name
 * @return {String}
 */
function createshortname(name) {
	return name.replace(/,'"\./, '').replaceAll(/\s/g, '-').toLowerCase();
}

export default createshortname;
