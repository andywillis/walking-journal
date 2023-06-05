/**
 * filterGeoJson
 *
 * @export
 * @param {String} inputFile
 * @return {Boolean}
 */
function filterGeoJson(inputFile) {
	return inputFile.endsWith('.geojson');
}

export default filterGeoJson;
