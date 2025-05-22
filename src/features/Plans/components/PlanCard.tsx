import { Plan } from "../types/Plan.types";
import styles from '../PlanPage.module.scss';
import iconHome from '../../../assets/images/Plans/IcHomeLight.png';
import { useInitStore } from "../../../store/initStore";
import { useNavigate } from "react-router-dom";

interface Props {
  plan: Plan;
  type: string;
}

const PlanCard = ({plan, type}: Props) => {

  const { setPlanData } = useInitStore();
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    setPlanData(plan);
    navigate('/resume');
  };
  return (
    <div
      className={styles.planPage__optionDetails}
    >
      {
        plan.recommended 
        ? <div className={styles.tagRecommended}>
            <span>
              Plan recomendado
            </span>
          </div>
        : <div className={styles.tagNone}/>
      }
      <div className={styles.planPage__optionCtnImg}>
        <div className={styles.planPage__optionTitle}>
          { plan.name }
        </div>
        <img
          src={iconHome}
        />
      </div>
      <div className={styles.planPage__optionInfo}>
        COSTO DEL PLAN
      </div>
      {
        type !== 'for_me' ?
          <div>
            <s>${ plan.price } antes</s>
            <div className={styles.planPage__optionPrice}>
              ${ plan.discountedPrice } al mes
            </div>
          </div>
        : 
          <div className={styles.planPage__optionPrice}>
            ${ plan.price } al mes
          </div>
      }

      <hr/>

      <ul>
        {
          plan.description.map((item, index)=>(
            <li key={index}>{ item }</li>
          ))
        }
      </ul>

      <button onClick={handleSelectPlan}>
        Seleccionar Plan
      </button>
      
    </div>
  )
}

export default PlanCard;
