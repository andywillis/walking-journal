import style from './style.module.css';

import { geoData } from '../../store';

// const walks = [
//   { id: 1, name: 'Home to the Bay', distance: 4, unit: 'miles' },
//   { id: 2, name: 'The Circuit', distance: 1.25, unit: 'miles' }
// ];

const walkNames = geoData.value.features.map(feature => {
  const { id, name } = feature.properties;
  return { id, name };
});

// function handleClick() {
//   const newData = { ...geoData.value };
//   newData.geometry.coordinates[0][0] = 1.2;
//   geoData.value = newData;
// }

function List() {
  return (
    <section class={style.listContainer}>
      <header>
        <h4>List of walks</h4>
      </header>
      <section class={style.list}>
        {walkNames.map(walk => {
          return (
            <button
              key={walk.id}
              type="button"
              class={style.item}
              // onClick={handleClick}
            >{walk.id}: {walk.name}
            </button>
          );
        })}
      </section>
    </section>
  );
}

export default List;
