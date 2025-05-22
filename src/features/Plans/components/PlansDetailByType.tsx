import { Plan } from "../types/Plan.types";
import PlanCard from "./PlanCard";
import styles from "../PlanPage.module.scss";
import PlanCarousel from "./PlanCarousel";
import { useMediaQuery } from "react-responsive";

interface Props {
  plans: Plan[];
  type: string;
}

const PlansDetailByType = ({plans, type}: Props) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.planPage__options}>

      {
        isMobile &&
        <PlanCarousel plans={plans} type={type}/> 
      }

      { !isMobile && plans.map((plan, index)=>(
        <PlanCard
          key={index}
          plan={plan}
          type={type}
        />
      ))}
      
    </div>
  )
}

export default PlansDetailByType;
