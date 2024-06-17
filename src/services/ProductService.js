import axios from 'axios';

const API_URL = 'https://localhost:7231/api/Products';

export const createProduct = (product) => {
  console.log(JSON.stringify(product));
  return axios.post('https://localhost:7231/api/Products/create', product);
};

export const getProductById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateProduct = (id, product) => {
  return axios.put(`${API_URL}/${id}`, product);
};

export const getAllProducts = () => {
  return axios.get(API_URL);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
