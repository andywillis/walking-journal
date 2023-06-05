/* eslint-disable no-loss-of-precision */
import * as L from 'leaflet';

const {
	startingPoints,
	castles,
	churches,
	pubs,
	monuments
} = JSON.parse(await import('./landmarks.json'));

const Icon = L.Icon.extend({
	shadowUrl: null,
	iconSize: new L.Point(18, 18),
	shadowSize: null,
	iconAnchor: new L.Point(9, 18),
	popupAnchor: new L.Point(0, -18)
});

export const startingPointLayer = new L.GeoJSON(startingPoints, {
	pointToLayer: (latlng) => {
		return new L.Marker(latlng, {
			icon: new Icon('images/star-18.png')
		});
	}
});

export const monumentLayer = new L.GeoJSON(monuments, {
	pointToLayer: (latlng) => {
		return new L.Marker(latlng, {
			icon: new Icon('images/monument-24.png')
		});
	}
});

export const churchLayer = new L.GeoJSON(churches, {
	pointToLayer: (latlng) => {
		return new L.Marker(latlng, {
			icon: new Icon('images/religious-christian-24.png')
		});
	}
});

export const pubLayer = new L.GeoJSON(pubs, {
	pointToLayer: (latlng) => {
		return new L.Marker(latlng, {
			icon: new Icon('images/beer-18.png')
		});
	}
});

export const castleLayer = new L.GeoJSON(castles, {
	pointToLayer: (latlng) => {
		return new L.Marker(latlng, {
			icon: new Icon('images/castle-18.png')
		});
	}
});
