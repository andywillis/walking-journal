import style from './style.module.css';

/**
 * DetailsPanel
 *
 * @return {React.ReactElement}
 */
function DetailsPanel({ children }) {
	return (
		<section class={style.panel}>
			{children}
		</section>
	);
}

export default DetailsPanel;
