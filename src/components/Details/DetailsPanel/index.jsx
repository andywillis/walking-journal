import style from './style.module.css';

/**
 * DetailsPanel
 *
 * @return {React.ReactElement}
 */
function DetailsPanel(props) {

	const { title, children } = props;

	return (
		<section class={style.panel}>

			<header>
				<h4>{title}</h4>
			</header>

			{children}
	
		</section>
	);
}

export default DetailsPanel;
