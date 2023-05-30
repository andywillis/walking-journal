// @ts-nocheck

import List from '../List';
import Map from '../Map';

import style from './style.module.css';

/**
 * Main
 *
 * @return {React.ReactElement}
 */
function Main() {
	return (
		<main class={style.main}>
			<List />
			<Map />
		</main>
	);
}

export default Main;
