import { darkMode } from '../signals';

/**
 * useTheme
 *
 * Alters the root class name depending on the dark mode value
 *
 */
function useTheme() {
	document.documentElement.className = darkMode.value ? 'dark' : 'light';
}

export default useTheme;
