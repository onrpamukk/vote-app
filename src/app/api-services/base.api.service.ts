import Axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

import { environment } from '../environment';

var axiosInstance: AxiosInstance;

export const initAxios = () => {
    axiosInstance = Axios.create({
        baseURL: environment.baseApiURL,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
        config.baseURL = `${environment.baseApiURL}/`;

        return config;
    });

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response.data;
        },
        (err) => {
            if (err.response.status !== 401) return Promise.reject(err);

            return err;
        }
    );
}

const httpGetFNC = (URL: string) => {
        return axiosInstance.get(URL).catch(handleError)
}

const httpPostFNC = (URL: string, body?: any) => {
        return axiosInstance.post(URL, body && typeof body === 'object' ? JSON.stringify(body) : body).catch(handleError);
}

const httpPutFNC = (URL: string, body: any) => {
        return axiosInstance.put(URL, JSON.stringify(body)).catch(handleError);
}

const httpDeleteFNC = (URL: string) => {
        return axiosInstance.delete(URL).catch(handleError)
}

const handleError = (err: any) => {
    console.log('API_ERR', err);
    return Promise.reject(err);
}

export const apiService = {
    httpGetFNC,
    httpPostFNC,
    httpPutFNC,
    httpDeleteFNC
}