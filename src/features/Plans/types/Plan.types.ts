export interface Plan {
  age: number;
  description: string[];
  discountedPrice?: number;
  name: string;
  price: number;
  recommended: boolean;
}

export interface PlanList {
  list: Plan[];
}
