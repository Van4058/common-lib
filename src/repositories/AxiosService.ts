import axios, {AxiosRequestConfig} from "axios";

export class AxiosService {
    static readonly Config = (): AxiosRequestConfig => {

        const config: AxiosRequestConfig = {
            headers: {
                // "Content-Type": isUp ? "multipart/form-data" : "text/json",
                // "Lang-Code": lng ?? 'vi',
                // "Platform": "web"
            },
            withCredentials: false
        };

        // if (!isUp) {
        //     config.headers!.Accept = "application/json";
        // }
        //
        // const storeConfig = StoreConfig.getInstance()

        // if (storeConfig.accessToken && storeConfig.accessToken.token && storeConfig.accessToken.token.length > 0) {
        //     // console.log('accessToken', storeConfig.accessToken.token)
        //     const et = EDData.setData({
        //         t: storeConfig.accessToken.token,
        //         e: moment().add(30, 'seconds').unix()
        //     })
        //
        //     config.headers!.Authorization = `Bearer ${et}`
        // }
        //
        // const osData: _T_OsDataHeader = {
        //     langCode: getLng() ?? 'vi',
        //     platform: 'web'
        // };
        //
        // config.headers!['os-data'] = EDData.setData(osData)

        return config;
    };

    public static get(url: string) {
        return axios.get(url, AxiosService.Config())
            .then(res => {
                console.log(res);
                return res;
            });
    }

    public static post(url: string, data: any) {
        return axios.post(url, data, AxiosService.Config())
            .then(res => {
                console.log(res);
                return res;
            });
    }

    public static put(url: string, data: any) {
        return axios.put(url, data, AxiosService.Config())
            .then(res => {
                console.log(res);
                return res;
            });
    }

    public static patch(url: string, data?: any) {
        return axios.patch(url, data, AxiosService.Config())
            .then(res => {
                console.log(res);
                return res;
            });
    }

    public static delete(url: string) {
        return axios.delete(url, AxiosService.Config())
            .then(res => {
                console.log(res);
                return res;
            });
    }
}