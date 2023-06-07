import convertArgs from './convertArgs.js';

/**
 * buildLandmarkIconSvg
 *
 * @param {string} path
 * @param {object} SvgProps { strokeColor, bgColor }
 * @return {string}
 */
export function buildLandmarkIconSvg({ path, mode = 'light', escapeQuotes = false }) {
	const svg = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" height="34" width="34" class="marker">
			<rect fill="none" x="0" y="0" width="34" height="34" />
			<rect x="1" y="1" rx="4" ry="4" width="31" height="31" stroke="${mode === 'light' ? '#333' : '#fcfcfc'}" style="stroke-linejoin:round;stroke-miterlimit:4;" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" stroke-width="3" />
			<rect x="1" y="1" width="31" height="31" rx="4" ry="4" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" />
			<path fill="${mode === 'light' ? '#333' : '#fcfcfc'}" transform="translate(9 9)" d="${path}" />
		</svg>
	`.trim().replace(/\n\t+/g, '');
	if (escapeQuotes) return svg.replaceAll('"', '\\"');
	return svg;
}

export function entry(args) {
	console.log(buildLandmarkIconSvg({ path: args.path, mode: args.mode, escapeQuotes: true }));
}

const args = convertArgs(process.argv);

entry(args);
