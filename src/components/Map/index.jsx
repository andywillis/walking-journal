import { useEffect, useRef } from 'preact/hooks';
import { effect } from '@preact/signals';

import * as L from 'leaflet';

import { geoData, currentWalk, darkMode } from '../../store';

import 'leaflet/dist/leaflet.css';
import style from './style.module.css';

/**
 * Map
 *
 * @return {React.ReactElement}
 */
function Map() {

  const mapRef = useRef();

  useEffect(() => {

    const home = [ 51.275710, 1.336495 ];

    mapRef.current = L.map('mapid', { dragging: !L.Browser.mobile }).setView(home, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      minZoom: 3,
      bounds: [
        [ -180, 180 ],
        [ 180, -180 ]
      ]
    }).addTo(mapRef.current);

    // Signals effect
    effect(() => {

      const walk = geoData.value.find(obj => {
        return obj.id === currentWalk.value;
      });

      const route = L.geoJSON(walk.route, {
        style: {
          ...walk.style.route,
          ...style.line
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
            html: svg.html[darkMode.value ? 'dark' : 'light'],
            // iconUrl: `../../assets/images/icons/${png.name}.png`,
            // iconSize: [ 5, 5 ],
            // iconAnchor: [ 16, 37 ]
          })
        });

      });

      L.featureGroup([ route, ...markers ]).addTo(mapRef.current);

      // walk.markers.forEach(marker => {
      //   L.geoJSON(walk.markers).addTo(mapRef.current);
      // });

      mapRef.current.fitBounds(route.getBounds());

    });

  }, []);

  return (
    <section ref={mapRef} class={style.mapContainer} id="mapid" />
  );

}

export default Map;
