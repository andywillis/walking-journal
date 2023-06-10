import { Link, route } from 'preact-router';

import Icon from '../Icon';
import IconGroup from '../IconGroup';

import { selectedUrl, darkMode } from '../../signals';

import style from './style.module.css';

function handleDarkLightMode() {
	darkMode.value = !darkMode.peek();
}

function handleClick(path) {
	route(path);
}

const notHomeRoutes = ['/about'];

/**
 * Header
 *
 * @return {React.ReactElement}
 */
function Header() {
	return (
		<header class={style.header}>
			<Link href="/"><h1>Walking Journal</h1></Link>
			<IconGroup>
				<Icon
					title="Home"
					type="home"
					handleClick={() => handleClick('/')}
					disabled={!notHomeRoutes.includes(selectedUrl.value)}
				/>
				<Icon
					title="Information"
					type="info"
					handleClick={() => handleClick('/about')}
					disabled={selectedUrl.value === '/about'}
				/>
				<Icon
					title="Toggle dark/light mode"
					type="darklight"
					handleClick={handleDarkLightMode}
				/>
			</IconGroup>
		</header>
	);
}

export default Header;
