import styles from './styles/Footer.module.scss';
import logoWhite from '../assets/images/Logo/logoWhite.png';
import logoMobile from '../assets/images/Logo/LogoMobile.png';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div>
        <img
          src={isMobile ? logoMobile : logoWhite}
        />
      </div>
      <div>
        <span>
          © {currentYear} RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </div>
  )
}

export default Footer;
