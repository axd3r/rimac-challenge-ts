import { create } from 'zustand';

interface User {
  name?: string;
  lastName?: string;
  birthDay?: string;
}

interface InsurancePlan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

interface InsurancePlanList {
  list: InsurancePlan[];
}

interface InitState {
  user: User | null | any;
  plan: InsurancePlanList | null | any;
  setUserData: (user: User) => void;
  setPlanData: (plan: InsurancePlan) => void;
  clearData: () => void;
}

const getStoredAuthData = () => {
  const user = localStorage.getItem('user');
  const plan = localStorage.getItem('plan');
  return {
    user: user ? JSON.parse(user) : null,
    plan: plan ? JSON.parse(plan) : null
  };
};

export const useInitStore = create<InitState>(set => ({
  ...getStoredAuthData(),
  setUserData: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  setPlanData: (plan: InsurancePlan) => {
    localStorage.setItem('plan', JSON.stringify(plan));
    set({ plan });
  },
  clearData: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('plan');
    set({ 
      user: null,  
      plan: null
    });
  },
}));
