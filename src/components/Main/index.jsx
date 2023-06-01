import Details from '../Details';
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
			<Details />
			<Map />
		</main>
	);
}

export default Main;
