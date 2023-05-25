import style from './style.module.css';

const walks = [
  { id: 1, name: 'Home to the Bay', distance: 4, unit: 'miles' },
  { id: 2, name: 'The Circuit', distance: 1.25, unit: 'miles' }
];

function List() {
  return (
    <section class={style.listContainer}>
      <header>
        <h4>List of walks</h4>
      </header>
      <section class={style.list}>
        {walks.map(walk => {
          return (
            <button
              type="button"
              class={style.item}
              key={walk.id}
            >{walk.name}
            </button>
          );
        })}
      </section>
    </section>
  );
}

export default List;
