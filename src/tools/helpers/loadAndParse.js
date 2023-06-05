import fs from 'fs/promises';

/**
 * loadAndParse
 *
 * @export
 * @param {String} inputPath
 * @param {String} inputFile
 * @return {Promise}
 */
async function loadAndParse(inputPath, inputFile) {
	try {
		const data = JSON.parse(await fs.readFile(`${inputPath}/${inputFile}`));
		return data;
	} catch (err) {
		console.error(err);
	}
}

export default loadAndParse;
