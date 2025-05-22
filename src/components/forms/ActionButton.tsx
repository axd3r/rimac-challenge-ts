import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import styles from './form.module.scss';

interface Props {
  isLoading: boolean;
  type: 'button' | 'submit';
  onClick?: any;
  title: string;
}

const ActionButton = (props: Props) => {

  const {
    isLoading,
    type = 'button',
    onClick = () => { },
    title,
  } = props;

  return (
    <Button
      variant="contained"
      type={type}
      className={styles.btnSubmit}
      endIcon={
        isLoading 
        ? <CircularProgress className={styles.progress} /> 
        : <></>}
      disabled={isLoading}
      onClick={onClick}
    >
      {!isLoading && title}
    </Button>
  );
};

export default ActionButton;
