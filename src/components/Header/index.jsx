import { Link } from 'preact-router/match';

import Nav from '../Nav';

import style from './style.module.css';

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
				<Link
					href="/about"
					class={style.anchor}
					activeClassName={style.active}
				>About
				</Link>
				<Link
					href="/settings"
					class={style.anchor}
					activeClassName={style.active}
				>Settings
				</Link>
			</Nav>
		</header>
	);
}

export default Header;
