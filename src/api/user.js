import axiosClient from './axiosClient';

const userApi = {
  login: data => {
    const url = `/user/login`;
    return axiosClient.post(url, data);
  },

  get: id => {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },

  create: data => {
    const url = `/user/signup`;
    return axiosClient.post(url, data);
  },

  update: (userId, data) => {
    const url = `/user/${userId}`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;
