import { geoData } from '../store';

function getWalks() {
  return geoData.value.features.map(feature => {
    const { id, name } = feature.properties;
    return { id, name };
  });
}

export default getWalks;
