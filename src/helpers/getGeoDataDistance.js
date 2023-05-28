// https://www.movable-type.co.uk/scripts/latlong.html
function getGeoDataDistance([ lon1, lat1 ], [ lon2, lat2 ], unit = 'mi') {

  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  if (unit === 'km') return d * 0.001;
  if (unit === 'mi') return d * 0.0006213712;

}

export default getGeoDataDistance;
