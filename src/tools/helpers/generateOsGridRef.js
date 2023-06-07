import { LatLon } from 'geodesy/osgridref.js';

function generateOsGridReference([ lng, lat ]) {
	const wgs84 = new LatLon(lat, lng);
	const gridref = wgs84.toOsGrid();
	return gridref.toString();
}

const coordinates = [
	1.2305470073964637,
	51.21524828822877
];

console.log(generateOsGridReference(coordinates));
