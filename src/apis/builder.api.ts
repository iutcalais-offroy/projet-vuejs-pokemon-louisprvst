import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokemon-api-seyrinian-production.up.railway.app',
});

export const getPokemonsApi = async ()=> {
  const response = await api.get('/pokemon-cards');
  return response.data;
};

export default api;