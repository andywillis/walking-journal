import { useEffect, useRef } from 'preact/hooks';
import { effect } from '@preact/signals';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { geoData, currentWalk } from '../../store';

import style from './style.module.css';

const myStyle = {
  color: '#ff7800',
  weight: 5,
  opacity: 0.65
};

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

    // const features = L.geoJSON(geoData.value, { style: myStyle }).addTo(mapRef.current);
    // mapRef.current.fitBounds(features.getBounds());

    effect(() => {

      // const coords = geoData.value.features.map(obj => {
      //   const [ lng, lat ] = obj.geometry.coordinates;
      //   return [ lat, lng ];
      // });

      const walk = geoData.value.find(obj => {
        return obj.id === currentWalk.value;
      });

      // console.log(geoData.value.features[1])

      const line = L.geoJSON(walk.geodata, { style: myStyle }).addTo(mapRef.current);
      // const line = L.polyline(coords, myStyle).addTo(mapRef.current);

      mapRef.current.fitBounds(line.getBounds());

    });

  }, []);

  return (
    <section ref={mapRef} class={style.mapContainer} id="mapid" />
  );

}

export default Map;
