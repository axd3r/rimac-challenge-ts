import { Checkbox } from "@mui/material";
import { FieldError, useFormContext } from "react-hook-form";

interface FieldProps {
  name: string;
  [key: string]: any;
}

const CheckBoxField: React.FC<FieldProps> = (props) => {

  const {
    name
  } = props;

  const {
    setValue,
    clearErrors,
    formState: { errors }
  } = useFormContext();

  const isError = errors[name] as FieldError | undefined;
  
  return (
    <>
      <Checkbox
        sx={{
          color: isError ? "red" : "black",
          marginRight: 1,
          padding: 0,
          '&.Mui-checked': {
            color: "black",
          },
        }}
        onChange={(e) => {
          clearErrors(name);
          setValue(name, e.target.checked);
        }}
      />
    </>
  )
}

export default CheckBoxField;
