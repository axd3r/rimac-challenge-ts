import { FieldError } from 'react-hook-form';

interface FieldErrors {
  [key: string]: FieldError | undefined;
}

export const useFormErrors = (fieldNames: string[], form: any) => {
  const {
    formState: { errors },
  } = form;

  const fieldErrors: FieldErrors = {};

  fieldNames.forEach(fieldName => {
    const error = errors[fieldName] as FieldError | undefined;
    if (error?.message) {
      fieldErrors[fieldName] = error;
    }
  });

  const hasErrors = Object.keys(fieldErrors).length > 0;

  return {
    hasErrors,
    fieldErrors,
  };
  
};
