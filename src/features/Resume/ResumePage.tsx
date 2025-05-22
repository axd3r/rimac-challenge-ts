import { useMediaQuery } from 'react-responsive';
import BackButton from '../../components/BackButton';
import History from '../../components/History';
import IconFamily from '../../components/icons/IconFamily';
import { useInitStore } from '../../store/initStore';
import styles from './ResumePage.module.scss';

const ResumePage = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { user, plan } = useInitStore();

  return (
    <div className="container">
      <div className="grid__col-span-12">
        <div className={styles.resumePage}>

          {
            !isMobile &&
            <>
              <History activeStep='resume'/>
              <BackButton />
            </>
          }
          
          <div className={styles.resumePage__title}>
            Resumen del seguro
          </div>
          <div>
            <div className={styles.resumePage__card}>

              <div className={styles.infoTitle}>
                PRECIOS CACULADOS PARA:
              </div>

              <div className={styles.ctnUser}>
                <IconFamily/>
                <span>
                  { `${user.name} ${user.lastName}` }
                </span>
              </div>
              <hr/>

              <div className={styles.infoCard}>
                <div className={styles.infoCard__title}>
                  Responsable de pago
                </div>
                <div className={styles.inforCard__detail}>
                  DNI: { user.dni }
                </div>
                <div className={styles.inforCard__detail}>
                  Celular: { user.phone }
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoCard__title}>
                  Plan elegido
                </div>
                <div className={styles.inforCard__detail}>
                  { plan.name }
                </div>
                <div className={styles.inforCard__detail}>
                  Costo del Plan: ${ plan.discountedPrice || plan.price} al mes
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage;
