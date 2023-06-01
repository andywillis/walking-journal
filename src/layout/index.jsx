import { Details, Map } from '../components';

import useTheme from '../hooks/useTheme';

import style from './style.module.css';

/**
 * App
 *
 * @return {React.ReactElement}
 */
function App() {

	useTheme();

	return (
		<main class={style.main}>
			<Details />
			<Map />
		</main>
	);
}

export default App;
