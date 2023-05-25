import style from './style.module.css';

function List() {
  return (
    <section class={style.listContainer}>
      <ul class={style.list}>
        <li>Test</li>
      </ul>
    </section>
  );
}

export default List;
