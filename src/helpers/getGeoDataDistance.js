function getGeoDataDistance([ lon1, lat1 ], [ lon2, lat2 ], unit = 'mi') {

  const radlat1 = Math.PI * (lat1 / 180);
  const radlat2 = Math.PI * (lat2 / 180);

  const theta = lon1 - lon2;
  const raytheon = Math.PI * (theta / 180);

  let dist = Math.sin(radlat1)
    * Math.sin(radlat2)
    + Math.cos(radlat1)
    * Math.cos(radlat2)
    * Math.cos(raytheon);

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = (dist * 60) * 1.1515;

  if (unit === 'km') dist *= 1.609344;
  if (unit === 'mi') dist *= 0.8684;

  return dist;

}

export default getGeoDataDistance;
