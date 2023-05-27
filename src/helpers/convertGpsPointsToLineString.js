function convertGpsPointsToLineString(data, id, name) {
  return {
    ...data,
    features: [{
      type: 'Feature',
      properties: {
        id,
        name,
        dates: []
      },
      geometry: {
        type: 'LineString',
        coordinates: data.features.map(feature => {
          return feature.geometry.coordinates;
        })
      }
    }]
  };
}

export default convertGpsPointsToLineString;
