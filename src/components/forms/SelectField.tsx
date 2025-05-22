import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FieldError, useFormContext } from 'react-hook-form';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './form.module.scss';

interface SelectFieldProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  [key: string]: any;
  label?: string;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { name, options, label, placeholder } = props;

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const error = errors[name] as FieldError | undefined;
  const value = watch(name);
  
  return (
    <FormControl fullWidth error={!!error?.message}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        {...register(name)}
        {...props}
        value={value}
        IconComponent={() => <ArrowDropDownIcon className={styles.icon} />}
        className={styles.select}
      >
        {placeholder && <MenuItem value=""><em>{placeholder}</em></MenuItem>}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {
        error?.message
        &&
        <div className={styles.message__error}>
          {error.message}
        </div>
      }
    </FormControl>
  );
};

export default SelectField;
