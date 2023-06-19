import classNames from 'classnames';

import { themeMode } from '../../signals';

import style from './index.module.css';

/**
 * Icon
 *
 * @param {Object} { type, handleClick }
 * @return {React.ReactElement}
 */
function Icon({ title, type, handleClick, disabled = false }) {

	const cn = classNames([
		style.icon,
		style[type],
		style[themeMode.value]
	]);

	return (
		<button
			title={title}
			type="button"
			class={cn}
			onClick={handleClick}
			disabled={disabled}
		/>
	);

}

export default Icon;
