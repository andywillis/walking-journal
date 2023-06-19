import { Link } from 'preact-router/match';

import style from './style.module.css';

/**
 * PanelItem
 *
 * @param {object} props
 * @return {React.ReactElement}
 */
function PanelItem({ shortname, children }) {
	return (
		<Link
			href={`/${shortname}`}
			class={style.item}
			activeClassName={style.active}
		>{children}
		</Link>
	);
}

export default PanelItem;
