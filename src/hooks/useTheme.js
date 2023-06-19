import { themeMode } from '../signals';

/**
 * useTheme
 *
 * Alters the root class name depending on the dark mode value
 *
 */
function useTheme() {
	document.documentElement.className = themeMode.value;
}

export default useTheme;
