import Icon from '../Icon';

import { darkMode } from '../../store';

import style from './style.module.css';

function handleClick() {
  darkMode.value = !darkMode.peek();
}

function Header() {
  return (
    <header class={style.header}>
      <h1>Walking Map</h1>
      <section class={style.icons}>
        <Icon
          type="light"
          label="Switch to light mode"
          handleClick={handleClick}
          disabled={!darkMode.value}
        />
        <Icon
          type="dark"
          label="Switch to dark mode"
          handleClick={handleClick}
          disabled={darkMode.value}
        />
      </section>
    </header>
  );
}

export default Header;
