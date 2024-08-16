import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export const fetchCustomers = () => api.get('/api/customers');

export const addCustomersApi = (newCustomer) => api.post('api/customers/', newCustomer)

export const deleteCustomersApi = id => api.delete('api/customers/'+id)

export const fetchProducts = () => api.get('/api/products');

export const fetchProduct = id => api.get('/api/products/'+id);

export const addProductsApi = (newProducts) => api.post('api/products/', newProducts)

export const updateProductsApi = (id, newProducts) => api.put('api/products/'+id, newProducts)

export const deleteProductApi = id => api.delete('api/products/'+id)

export const fetchTransactions = (payload) => api.get('/api/transactions?filter='+new URLSearchParams(payload));
