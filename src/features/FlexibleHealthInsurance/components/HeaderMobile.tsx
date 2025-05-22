import styles from '../FlexibleHealthInsurancePage.module.scss';
import imgFamily from '../../../assets/images/FlexibleHealthInsurance/family.png';

const HeaderMobile = () => {
  return (
    <>
      <div className="grid__col-span-3">
        <div className={styles.containerGeneral}>
          <div className={styles.container__form}>
            <span className={styles.tag}>
              Seguro Salud Flexible
            </span>
            <h1>
              Creado para ti y tu familia
            </h1>
          </div>
        </div>
      </div>
      <div className="grid__col-span-3">
        <div className={styles.container__img}>
          <img src={imgFamily} />
        </div>
      </div>
      <div className="grid__col-span-6">
        <div className={styles.ctnLine}>
          <hr/>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile;
