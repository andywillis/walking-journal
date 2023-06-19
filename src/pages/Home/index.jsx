import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

import { Details, Map } from '../../components';

import { selectedWalk, walks } from '../../signals';

import style from './style.module.css';

/**
 * Main
 *
 * @param {Object} props
 * @return {React.ReactElement}
 */
function Home(props) {
	
	const { matches: { walk } } = props;

	useEffect(() => {
		
		// If the URL contains a walk set the new state
		// to the walk
		if (walk.length) selectedWalk.value = walk;
		
		// If there is no walk (URL is "/")
		if (!walk.length) {

			// If there is no current selected walk
			if (selectedWalk.peek()) {

				// If there is an existing selected walk route to that
				// This condition is used to route the home page back to
				// the previous selected route from a nav route
				route(selectedWalk.peek());

			} else {
				
				// Otherwise route to the first available walk
				route(`/${walks.peek()[0].shortname}`, true);
			}
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
