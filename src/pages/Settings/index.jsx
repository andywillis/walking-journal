/* eslint-disable max-len */

import { themeMode } from '../../store';

import style from './style.module.css';

function handleTheme() {
	themeMode.value = themeMode.peek() === 'dark' ? 'light' : 'dark';
}

/**
 * Settings
 *
 * @return {React.ReactElement}
 */
function Settings() {
	return (
		<main class={style.settings}>
			<h2>Settings</h2>
			<fieldset>
				<legend>Theme</legend>
				<label htmlFor="light">Light
					<input
						id="light"
						type="radio"
						name="theme"
						checked={themeMode.value === 'light'}
						onChange={handleTheme}
					/>
				</label>
				<label htmlFor="dark">Dark
					<input
						id="dark"
						type="radio"
						name="theme"
						checked={themeMode.value === 'dark'}
						onChange={handleTheme}
					/>
				</label>
			</fieldset>
		</main>
	);
}

export default Settings;
