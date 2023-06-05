/**
 * convertArgs
 *
 * @export
 * @param {Array} args
 * @return {Object}
 */
function convertArgs(args) {
	return args.slice(2).reduce((acc, c) => {
		const [ key, value ] = c.split('=');
		acc[key] ??= value;
		return acc;
	}, {});
}

export default convertArgs;
