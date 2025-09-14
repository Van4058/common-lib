import {AxiosService} from "./AxiosService";

export class ApiService {
    admin = {
        getList() {
            return AxiosService.get('hfhfh');
        }
    };
}