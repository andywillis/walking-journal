import List from '../List';
import Map from '../Map';

import style from './style.module.css';

function Main() {
  return (
    <main class={style.main}>
      <List />
      <Map />
    </main>
  );
}

export default Main;
