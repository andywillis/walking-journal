// @ts-nocheck

import DarkLightIcon from '../DarkLightIcon';

import { darkMode } from '../../signals';

import style from './style.module.css';

function handleClick() {
	darkMode.value = !darkMode.peek();
}

function Header() {
	return (
		<header class={style.header}>
			<h1>Walking Map</h1>
			<section class={style.icons}>
				<DarkLightIcon
					mode={darkMode.peek() ? 'dark' : 'light'}
					label="Switch light/dark mode"
					handleClick={handleClick}
				/>
			</section>
		</header>
	);
}

export default Header;
