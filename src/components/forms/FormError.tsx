import React from 'react';
import styles from './form.module.scss';

interface FormErrorProps {
  message?: string;
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.message__error}>
      {message}
    </div>
  );
};

export default FormError;
