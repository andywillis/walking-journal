import { Link, route } from 'preact-router';

import Icon from '../Icon';
import IconGroup from '../IconGroup';

import { darkMode } from '../../signals';

import style from './style.module.css';

function handleDarkLightMode() {
	darkMode.value = !darkMode.peek();
}

function handleInfo() {
	route('/about');
}

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
					title="Information"
					type="info"
					handleClick={handleInfo}
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
