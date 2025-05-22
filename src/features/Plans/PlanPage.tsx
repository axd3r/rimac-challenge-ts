import { useInitStore } from '../../store/initStore';
import imgForMe from '../../assets/images/Plans/IcProtectionLight.png';
import imgForSomeoneElse from '../../assets/images/Plans/IcAddUserLight.png';
import styles from './PlanPage.module.scss';
import RadioCardField from './components/forms/RadioCardField';
import { useChooseTypePlan } from './hooks/useChooseTypePlan';
import { LinearProgress } from '@mui/material';
import PlansDetailByType from './components/PlansDetailByType';
import BackButton from '../../components/BackButton';
import History from '../../components/History';
import { useMediaQuery } from 'react-responsive';

const PlanPage = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { user } = useInitStore();

  const {
    selectedOption,
    handleOnChangeRadio,
    isLoading,
    plans
  } = useChooseTypePlan();

  return (
    <div className="container">
      <div className="grid__col-span-12">
        
        <div className={styles.planPage}>
          
          {
            !isMobile &&
            <>
              <History activeStep='plans'/>
              <BackButton />
            </>
          }

          <div className={styles.planPage__question}>
            { user.name } ¿Para quién deseas <br/> cotizar?
          </div>

          <p className={styles.planPage__subtext}>
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>

          {
            isLoading && 
            <div className={styles.planPage__linearProgress}>
              <LinearProgress sx={{width: '20%'}}/>
            </div>
          }

          <div className={styles.planPage__options}>

            <RadioCardField
              name="typePlan"
              value="for_me"
              imgDefault={imgForMe}
              title="Para mí"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              onChange={handleOnChangeRadio}
              selectedOption={selectedOption}
            />

            <RadioCardField
              name="typePlan"
              value="for_someone_else"
              imgDefault={imgForSomeoneElse}
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier otra persona."
              onChange={handleOnChangeRadio}
              selectedOption={selectedOption}
            />

          </div>

          {
            plans && 
            <PlansDetailByType 
              plans={plans}
              type={selectedOption}
            />
          }

        </div>

      </div>
    </div>
  );
}

export default PlanPage;
