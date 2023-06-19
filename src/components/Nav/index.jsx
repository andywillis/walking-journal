import style from './style.module.css';

function Nav({ children }) {
	return (
		<section class={style.nav}>
			{children}
		</section>
	);
}

export default Nav;
