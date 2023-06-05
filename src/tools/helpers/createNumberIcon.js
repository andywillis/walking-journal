/**
 * createNumberIcon
 *
 * @param {number} number
 * @param {number} [size=1]
 * @param {string} [mode="light"]
 * @return {string}
 */
function createNumberIcon(number, size = 48, mode = 'light') {
	return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
			<circle cx="24" cy="24" r="24" fill="${mode === 'light' ? '#333' : '#fcfcfc'}" />
			<circle cx="24" cy="24" r="21" fill="${mode === 'light' ? '#fcfcfc' : '#333'}" />
			<text x="24" y="32" text-anchor="middle" alignment-baseline="middle" fill="${mode === 'light' ? '#333' : '#fcfcfc'}" style="font-size: 1.4rem;font-weight:400">
				${number}
			</text>
		</svg>
	`;
}

export default createNumberIcon;
