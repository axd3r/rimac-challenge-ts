import { useEffect, useState } from "react";
import PlanService from "../services/PlanService";
import { Plan, PlanList } from "../types/Plan.types";
import { useInitStore } from "../../../store/initStore";
import { differenceInYears, parse } from "date-fns";

const planService = new PlanService();

export const useChooseTypePlan = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>();
  const { user } = useInitStore();

  const handleOnChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const getPlans = async () => {
    try {
      setIsLoading(true);
      const { data } = await planService.getPlansGeneric();
      transformDataPlans(data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const calculateAge = (birthDay: string) => {
    const dateOfBirth = parse(birthDay, 'dd-MM-yyyy', new Date());
    return differenceInYears(new Date(), dateOfBirth);
  }

  const transformDataPlans = (data: PlanList) => {
    const age = calculateAge(user.birthDay);
    const customData = data.list
      .filter(plan => plan.age <= age)
      .map((plan, index) => 
        selectedOption === 'for_me' 
          ? { ...plan, recommended: index === 0 } 
          : { ...plan, discountedPrice: plan.price - plan.price * 0.05, recommended: index === 0 }
      );
    setPlans(customData);
  };

  useEffect(() => {
    selectedOption && getPlans();
  }, [selectedOption]);

  return {
    selectedOption,
    handleOnChangeRadio,
    isLoading,
    plans
  }
}
