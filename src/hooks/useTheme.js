import { darkMode } from '../store';

export default function useTheme() {
  document.documentElement.className = darkMode.value ? 'dark' : 'light';
}
