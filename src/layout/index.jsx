import Router from 'preact-router';

import { About, Home } from '../pages';
import { Header } from '../components';

import useTheme from '../hooks/useTheme';

/**
 * Layout
 *
 * @return {React.ReactElement}
 */
function Layout() {

	useTheme();

	return (
		<>
			<Header />
			<Router>
				<Home path="/:walk?" />
				<About path="/about" />
			</Router>
		</>
	);
}

export default Layout;
