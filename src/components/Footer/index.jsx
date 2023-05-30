import style from './style.module.css';

/**
 * Footer
 *
 * @return {React.ReactElement}
 */
function Footer() {
	return (
		<footer class={style.footer}>
			© Andy Willis {new Date().getFullYear()}
		</footer>
	);
}

export default Footer;
