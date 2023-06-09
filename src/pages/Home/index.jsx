import { useEffect } from 'preact/hooks';
import { route } from 'preact-router';

import Details from '../../components/Details';
import Map from '../../components/Map';

import { selectedWalk, walks } from '../../signals';

import style from './style.module.css';

/**
 * Main
 *
 * @param {Object} props
 * @return {React.ReactElement}
 */
function Main(props) {
	
	const { matches: { walk } } = props;

	useEffect(() => {
		if (walk.length) {
			selectedWalk.value = walk;
		} else {
			route(`/${walks.value[0].shortname}`, true);
		}
	}, [walk]);

	return (
		<main class={style.main}>
			<Details walk={walk} />
			<Map walk={walk} />
		</main>
	);

}

export default Main;
