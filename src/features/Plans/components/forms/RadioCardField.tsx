import styles from '../../PlanPage.module.scss';
import unChecked from '../../../../assets/images/Plans/unChecked.png';
import checked from '../../../../assets/images/Plans/checked.png';

interface RadioFieldProps {
  name: string;
  imgDefault: any;
  title: string;
  description: string;
  value: string;
  selectedOption: string;
  onChange: (data: any) => void;
}

const RadioCardField: React.FC<RadioFieldProps> = (props) => {

  const {
    name,
    imgDefault,
    title,
    description,
    value,
    selectedOption,
    onChange,
  } = props;

  const handleClick = () => {
    onChange({ target: { value } });
  };

  return (
    <>
      <div
        className={`${styles.planPage__option} ${selectedOption === value ? styles.selected : ''}`}
        onClick={handleClick}
      >
        <img 
          src={selectedOption === value ? checked : unChecked}
          className={styles.planPage__optionRadio}
        />
        <input 
          type="hidden"
          name={name}
          onChange={onChange}
          value={value}
        />
        <img src={imgDefault}/>
        <div className={styles.planPage__optionTitle}>
          { title }
        </div>
        <div className={styles.planPage__optionDescription}>
          { description }
        </div>
      </div>
    </>
  )
}

export default RadioCardField;
