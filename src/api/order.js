import axiosClient from './axiosClient';

const orderApi = {
  get: id => {
    const url = `/order/${id}`;
    return axiosClient.get(url);
  },

  create: data => {
    const url = `/order/`;
    return axiosClient.post(url, data);
  },

  update: product => {
    const url = `/order/${product._id}`;
    return axiosClient.patch(url, product);
  },

  delete: orderId => {
    const url = `/order/${orderId}`;
    return axiosClient.delete(url);
  },
};

export default orderApi;
