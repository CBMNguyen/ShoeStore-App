import axiosClient from './axiosClient';

const productApi = {
  getAll: params => {
    const url = '/products';
    return axiosClient.get(url, {params});
  },

  get: id => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  update: product => {
    const url = `/products/${product._id}`;
    return axiosClient.patch(url, product);
  },
};

export default productApi;
