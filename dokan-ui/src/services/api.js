import axios from 'axios';
import { appConfig } from './config';

const createAxios = () => {
  const params = {
    baseURL: appConfig.apiURL,
  };
  return axios.create(params);
};

export const fetchProducts = async () => {
  const { data } = await createAxios().get('/products');
  return data;
};
