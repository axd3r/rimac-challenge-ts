import IconStep1 from './icons/IconStep1';
import IconStep2 from './icons/IconStep2';
import styles from './styles/History.module.scss';

interface Props {
  activeStep: 'plans' | 'resume'
}

const History = ({ activeStep }: Props) => {
  return (
    <div className={styles.history}>
      <IconStep1 
        fill={activeStep === 'plans' ? 'white' : '#7A81B2'}
        stroke={activeStep === 'plans' ? '#4F4FFF' : '#7A81B2'}
        fillCircle={activeStep === 'plans' ? '#4F4FFF' : '#EDEFFC'}
      />
      <span
        className={activeStep === 'plans' ? styles.active : ''}
      >
        Planes y coberturas
      </span>
      <span>----</span>
      <IconStep2
        fill={activeStep === 'resume' ? 'white' : '#7A81B2'}
        stroke={activeStep === 'resume' ? '#4F4FFF' : '#7A81B2'}
        fillCircle={activeStep === 'resume' ? '#4F4FFF' : '#EDEFFC'}
      />
      <span
        className={activeStep === 'resume' ? styles.active : ''}
      >
        Resumen
      </span>
    </div>
  )
}

export default History;
