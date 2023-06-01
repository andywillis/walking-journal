import classNames from 'classnames';

import style from './style.module.css';

/**
 * PanelItem
 *
 * @param {object} props
 * @return {React.ReactElement}
 */
function PanelItem(props) {

	const {
		id,
		walkId,
		handleClick,
		children
	} = props;
	
	const itemClass = classNames({
		[style.item]: true,
		[style.highlighted]: id === walkId
	});

	return (
		<button
			type="button"
			class={itemClass}
			onClick={() => handleClick(id)}
		>{children}
		</button>
	);

}

export default PanelItem;
