import styles from './FlexibleHealthInsurancePage.module.scss';
import imgFamily from '../../assets/images/FlexibleHealthInsurance/family.png';
import FormSearchUser from './components/FormSearchUser';
import Footer from '../../components/Footer';
import { useMediaQuery } from 'react-responsive';
import TitleDesktop from './components/TitleDesktop';
import HeaderMobile from './components/HeaderMobile';

const FlexibleHealthInsurancePage = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });


  return (
    <div className="container">
      <div className="container__blur container__blur--left"></div>
      <div className="container__blur container__blur--right"></div>

      { isMobile && <HeaderMobile /> }

      {
        !isMobile &&
        <div className="grid__col-span-6">
          <div className={styles.container__img}>
            <img src={imgFamily} />
          </div>
        </div>
      }

      <div className="grid__col-span-6">
        <div className={styles.container__form}>
          
          {
            !isMobile && <TitleDesktop />
          }
        
          <p>
            Tú eliges cuanto pagar. Ingresa tu datos, cotiza y <br/>
            recibe nuestra asesoría. 100% online.
          </p>

          <FormSearchUser />

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FlexibleHealthInsurancePage;
