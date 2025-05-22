import AppService from "../../../services/AppService";

class PlanService extends AppService {

  private path: string;

  constructor() {
    super();
    this.path = 'api';
  }

  async getPlansGeneric() {
    return this.getHttp().get(`${this.path}/plans.json`);
  }

}

export default PlanService;
