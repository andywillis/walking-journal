import { darkMode } from '../store';

export default function useDarkMode() {
  document.documentElement.className = darkMode.value ? 'dark' : 'light';
}
