import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { tokenStore } from './tokenStore';

interface Process {
  env: { [key: string]: string };
}
declare let process: Process;
const BASE_URL = 'https://api.ninehire.com/';

export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  query?: { [key: string]: string | number | boolean };
}

const makeRequest = async <T>({
  url,
  method,
  headers,
  body,
  query,
}: ApiOption): Promise<T> => {
  let token = null;
  token = tokenStore.get();

  let response: AxiosResponse<T>;

  try {
    const requestConfig: AxiosRequestConfig = {
      baseURL: BASE_URL,
      url,
      method,
      data: body,
      params: query,
    };
    requestConfig.headers = headers ? { ...headers } : {};
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    response = await axios.request<T>(requestConfig);
  } catch (e) {
    const err: AxiosError = e;
    const { response, request } = err;

    if (response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const { status, data } = response;

      if (status >= 500) {
        console.log('server error');
        throw new Error('server error');
      } else if (status >= 400) {
        if (status === 401) {
          console.log('Unauthorized');
          throw new Error('Unauthorized');
        }
        console.log(data.message);
        throw new Error(data.message);
      }
    } else if (request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      throw new Error('server response not exist');
    } else {
      throw new Error('axios config error');
    }
  }
  return response.data;
};

export default makeRequest;
