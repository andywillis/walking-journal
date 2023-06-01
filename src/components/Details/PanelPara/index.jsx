import style from './style.module.css';

/**
 * PanelPara
 *
 * @param {object} props
 * @return {React.ReactElement}
 */
function PanelPara({ children }) {
	return (
		<p class={style.para}>
			{children}
		</p>
	);
}

export default PanelPara;
