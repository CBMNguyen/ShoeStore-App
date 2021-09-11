import axios from 'axios';
import queryString from 'query-string';
import {REACT_APP_API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    // Accept: 'application/json',
    // 'content-type': 'application-json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async config => {
    const user = JSON.parse(
      await AsyncStorage.getItem('persist:ShoesStore'),
    ).user;

    const token = JSON.parse(user).token;
    if (token) config.headers.Authorization = `Bearer ${token}`;

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
    return Promise.reject(error.response.data);
  },
);

export default axiosClient;
