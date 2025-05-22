import { useNavigate } from 'react-router-dom';
import IconBack from './icons/IconBack';
import styles from './styles/Buttons.module.scss';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div 
      className={styles.btnBack}
      onClick={handleBack}
    >
      <IconBack/>
      <span>Volver</span>
    </div>
  )
}

export default BackButton