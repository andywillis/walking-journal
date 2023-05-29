import * as L from 'leaflet';

import { geoData, currentWalk, darkMode } from '../store';

function updateMap(mapRef) {

  const walk = geoData.value.find(obj => {
    return obj.id === currentWalk.value;
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
        html: svg.html[darkMode.value ? 'dark' : 'light']
      })
    });

  });

  L.featureGroup([ route, ...markers ]).addTo(mapRef.current);

  mapRef.current.fitBounds(route.getBounds());

}

export default updateMap;
