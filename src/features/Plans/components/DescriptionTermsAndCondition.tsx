import styles from '../VehicleQuotePage.module.scss';

const DescriptionTermsAndCondition = () => {
  return (
    <div className={styles.ctn__terms}>
      <span>Acepto la </span>
      <span className={styles.description__mark}>
        Política de Protección de Datos Personales
      </span>
      <span> y los </span>
      <span className={styles.description__mark}>
        Términos y Condiciones
      </span>
    </div>
  )
}

export default DescriptionTermsAndCondition;
