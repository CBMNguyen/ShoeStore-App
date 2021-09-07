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

  update: user => {
    const url = `/user/${user._id}`;
    return axiosClient.patch(url, user);
  },
};

export default userApi;
