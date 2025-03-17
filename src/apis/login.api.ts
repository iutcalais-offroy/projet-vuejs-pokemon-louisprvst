import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokemon-api-seyrinian-production.up.railway.app',
});

export const loginApi = async (email: string, password: string): Promise<string> => {
  const response: any = await api.post('/users/login', { email, password });
  return response.data.token;
};

export const registerApi = async (email: string, password: string): Promise<string> => {
  const response = await api.post('/users', { email, password });
  return response.data.id;
};

export default api;