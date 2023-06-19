import Router from 'preact-router';

import { About, Home, Settings } from '../pages';
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
				<Settings path="/settings" />
			</Router>
		</>
	);
}

export default Layout;
