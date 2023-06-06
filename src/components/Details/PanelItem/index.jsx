import { Link } from 'preact-router/match';

import style from './style.module.css';

/**
 * PanelItem
 *
 * @param {object} props
 * @return {React.ReactElement}
 */
function PanelItem(props) {

	const {
		shortname,
		children
	} = props;

	return (
		<Link
			class={style.item}
			activeClassName={style.active}
			href={`/${shortname}`}
		>{children}
		</Link>
	);

}

export default PanelItem;
