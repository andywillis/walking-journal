import { Link } from 'preact-router/match';

// import Icon from '../Icon';
import Nav from '../IconGroup';

// import { selectedUrl, themeMode } from '../../signals';

import style from './style.module.css';

// function handleDarkLightMode() {
// 	themeMode.value = themeMode.peek() === 'dark' ? 'light' : 'dark';
// }

// function handleClick(path) {
// 	route(path);
// }

// const notHomeRoutes = ['/about'];

/**
 * Header
 *
 * @return {React.ReactElement}
 */
function Header() {
	return (
		<header class={style.header}>
			<Link href="/"><h1>Walking Journal</h1></Link>
			<Nav>
				{/* <Link
					href="/"
					class={style.anchor}
					activeClassName={style.active}
				>Home
				</Link> */}
				<Link
					href="/about"
					class={style.anchor}
					activeClassName={style.active}
				>About
				</Link>
				{/* <Icon
					title="Home"
					type="home"
					handleClick={() => handleClick('/')}
					disabled={!notHomeRoutes.includes(selectedUrl.value)}
				/> */}
				<Link
					href="/settings"
					class={style.anchor}
					activeClassName={style.active}
				>Settings
				</Link>
				{/* <Icon
					title="Information"
					type="info"
					handleClick={() => handleClick('/about')}
					disabled={selectedUrl.value === '/about'}
				/> */}
				{/* <Icon
					title="Toggle dark/light mode"
					type="darklight"
					handleClick={handleDarkLightMode}
				/> */}
			</Nav>
		</header>
	);
}

export default Header;
