import { useEffect } from 'preact/hooks';
import { route } from 'preact-router';

import { Details, Map } from '../../components';

import { selectedWalk, walks } from '../../signals';

import style from './style.module.css';
import useSelectedUrl from '../../hooks/useSelectedUrl';

/**
 * Main
 *
 * @param {Object} props
 * @return {React.ReactElement}
 */
function Home(props) {
	
	const { url, matches: { walk } } = props;

	useSelectedUrl(url);

	useEffect(() => {
		if (walk.length) {
			selectedWalk.value = walk;
		} else {
			route(`/${walks.value[0].shortname}`, true);
		}
	}, [walk]);

	return (
		<main class={style.main}>
			<Details />
			<Map />
		</main>
	);

}

export default Home;
