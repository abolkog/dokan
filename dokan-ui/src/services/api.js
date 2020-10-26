import axios from 'axios';
import { appConfig } from './config';

const createAxios = () => {
  const params = {
    baseURL: appConfig.apiURL,
  };
  return axios.create(params);
};

export const fetchProducts = async (query = '') => {
  const { data } = await createAxios().get(`/products?${query}`);
  return data;
};

export const createOrder = async order => {
  const { data } = await createAxios().post('/orders', order);
  return data;
};
