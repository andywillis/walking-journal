import style from './style.module.css';

function IconGroup({ children }) {
	return (
		<section class={style.iconGroup}>
			{children}
		</section>
	);
}

export default IconGroup;
