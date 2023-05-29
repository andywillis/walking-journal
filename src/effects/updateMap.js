import * as L from 'leaflet';

function updateMap(geoData, currentWalk, darkMode, mapRef) {

  const walk = geoData.find(obj => {
    return obj.id === currentWalk;
  });

  const route = L.geoJSON(walk.route, {
    style: {
      color: 'var(--orange-6)',
      weight: 5,
      opacity: 0.65
    }
  });

  const markers = walk.markers.features.map(marker => {

    const {
      geometry: { coordinates },
      properties: { icons: { svg } }
    } = marker;

    const [ lng, lat ] = coordinates;

    return L.marker([ lat, lng ], {
      icon: L.divIcon({
        html: svg.html[darkMode ? 'dark' : 'light']
      })
    });

  });

  L.featureGroup([ route, ...markers ]).addTo(mapRef.current);

  mapRef.current.fitBounds(route.getBounds());

}

export default updateMap;
