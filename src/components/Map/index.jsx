import { useEffect } from 'preact/hooks';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import style from './style.module.css';

function Map() {

  useEffect(() => {

    const home = [ 51.275710, 1.336495 ];

    const map = L.map('mapid', { dragging: !L.Browser.mobile }).setView(home, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      minZoom: 3,
      bounds: [
        [ -180, 180 ],
        [ 180, -180 ]
      ]
    }).addTo(map);

  }, []);

  return (
    <section class={style.mapContainer} id="mapid" />
  );

}

export default Map;
