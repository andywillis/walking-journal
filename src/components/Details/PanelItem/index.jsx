import { route } from 'preact-router';

import { selectedWalk } from '../../../signals';

import style from './style.module.css';

function handleClick(e) {
	const { href } = e.target.dataset;
	route(href);
}

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

	const cn = [
		style.item,
		selectedWalk.value === shortname && style.active
	].join(' ');

	return (
		<button
			type="button"
			class={cn}
			data-href={`/${shortname}`}
			// activeClassName={style.active}
			// href={`/${shortname}`}
			onClick={handleClick}
		>{children}
		</button>
	);

}

export default PanelItem;
