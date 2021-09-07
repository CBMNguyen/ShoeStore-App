import axios from 'axios';
import queryString from 'query-string';
import {REACT_APP_API_URL} from '@env';

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application-json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
