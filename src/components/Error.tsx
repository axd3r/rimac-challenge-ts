import backgroundImage from "../assets/images/404.png";
import styles from './styles/Error.module.scss';

const Error = () => {
  return (
    <div className={styles.wrapper__error}>
      <img
        src={backgroundImage}
        alt="error"
        className={styles.image__error}
      />
    </div>
  )
}

export default Error;
