import axios, { AxiosInstance } from 'axios';
import { environment } from '../environments';

class AppService {

  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: environment.apiMain,
    });
  }

  getHttp(): AxiosInstance {
    return this.http;
  }

}

export default AppService;
