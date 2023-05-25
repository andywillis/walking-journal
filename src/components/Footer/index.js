import style from './style.module.css';

function Footer() {
  return (
    <footer class={style.footer}>
      © Andy Willis {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
