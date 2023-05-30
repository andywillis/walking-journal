// @ts-nocheck

import classNames from 'classnames';

import style from './index.module.css';

/**
 * DarkLightIcon
 *
 * @param {Object} { mode, label, handleClick, disabled }
 * @return {React.ReactElement}
 */
function DarkLightIcon({ mode, label, handleClick, disabled }) {

	const cn = classNames([ style.icon, style[mode] ]);

	return (
		<button
			type="button"
			aria-label={label}
			class={cn}
			onClick={handleClick}
			disabled={disabled}
		/>
	);

}

export default DarkLightIcon;
