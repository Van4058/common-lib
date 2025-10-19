import {AxiosService} from "./AxiosService";

class ApiService {
    admin = {
        getList() {
            return AxiosService.get('hfhfh');
        }
    };

    getTodos = () => {
        return AxiosService.get('https://jsonplaceholder.typicode.com/todos');
    }

    getUsers = () => {
        return AxiosService.get('https://jsonplaceholder.typicode.com/users');
    }
}

export const apiService = new ApiService();