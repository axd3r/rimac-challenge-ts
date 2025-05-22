import { PatternFormat } from "react-number-format";
import { useFormContext } from "react-hook-form";
import styles from './form.module.scss';

interface PatternFieldProps {
  format: string;
  name: string;
  label?: string;
  double?: boolean;
  [key: string]: any;
}

const PatternField: React.FC<PatternFieldProps> = (props) => {

  const {
    format,
    name,
    placeholder = '',
    double = false
  } = props;

  const {
    setValue,
    clearErrors,
    watch,
  } = useFormContext();
  const value = watch(name);

  return (
    <>
      <div className={styles.ctn__input_pattern}>
        <label
          className={
            value 
            ? styles.labelWithValue 
            : styles.labelWithoutLabel
          }
        >
          { placeholder }
        </label>
        <PatternFormat
          type="text"
          className={!double ? styles.input : styles.inputDouble}
          onChange={(e) => {
            clearErrors(name);
            setValue(name, e.target.value.trim());
          }}
          format={format}
        />
      </div>
    </>
  )
}

export default PatternField;
