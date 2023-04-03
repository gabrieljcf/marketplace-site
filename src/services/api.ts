import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://marketplace-api-aa4s.onrender.com'
})