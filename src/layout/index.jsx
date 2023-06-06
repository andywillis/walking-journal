import Router from 'preact-router';

import { Main } from '../components';

import useTheme from '../hooks/useTheme';

/**
 * App
 *
 * @return {React.ReactElement}
 */
function App() {

	useTheme();

	return (
		<Router>
			<Main path="/:walk?" />
		</Router>
	);
}

export default App;
