import { useEffect, useRef } from 'preact/hooks';
import { effect } from '@preact/signals';

import * as L from 'leaflet';

// import { geoData, currentWalk, darkMode } from '../../store';

import updateMap from '../../effects/updateMap';

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
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      minZoom: 3,
      bounds: [
        [ -180, 180 ],
        [ 180, -180 ]
      ]
    }).addTo(mapRef.current);

    // Signals effect
    effect(() => updateMap(mapRef));

  }, []);

  return (
    <section ref={mapRef} class={style.mapContainer} id="mapid" />
  );

}

export default Map;
