import imgLogo from '../assets/images/Logo/logo.png';
import IconPhone from './icons/IconPhone';
import styles from './styles/Navbar.module.scss';

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={imgLogo} alt="Logo" />
      </div>

      <div className={styles.navbar__phone}>
        <span className={styles.navbar__description}>
          ¡Compra por este medio!
        </span>
        <IconPhone />
        <a href="tel:(01) 411 6001">(01) 411 6001</a>
        <span className={styles.navbar__callUs}>(01)411 6001</span>
      </div>
    </div>
  );
}

export default Header;
