import AppService from "../../../services/AppService";

class UserService extends AppService {

  private path: string;

  constructor() {
    super();
    this.path = 'api';
  }

  async getUserGeneric() {
    return this.getHttp().get(`${this.path}/user.json`);
  }

}

export default UserService;
