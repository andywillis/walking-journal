import classNames from 'classnames';

import { darkMode } from '../../signals';

import style from './index.module.css';

function handleDarkLightMode() {
	darkMode.value = !darkMode.peek();
}

/**
 * DarkLightIcon
 *
 * @param {Object} { mode, label, handleClick, disabled }
 * @return {React.ReactElement}
 */
function DarkLightIcon() {

	const cn = classNames([ style.icon, style[darkMode.value ? 'dark' : 'light'] ]);

	return (
		<button
			type="button"
			aria-label="Switch light/dark mode"
			class={cn}
			onClick={handleDarkLightMode}
		/>
	);

}

export default DarkLightIcon;
