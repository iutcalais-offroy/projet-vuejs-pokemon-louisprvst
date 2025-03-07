import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginApi , registerApi} from './../apis/login.api'

export const useAuthStore = defineStore('auth', () => {
  const email = ref('');
  const password = ref('');
  const token = ref(null);
  const errorMessage = ref('');

  async function login() {
    try {
      const jwt = await loginApi(email.value, password.value);
      token.value = jwt;

      console.log('Token reçu :', token.value);
      localStorage.setItem('jwt', token.value);
    } 
    catch (error) {
      errorMessage.value = error.message;
    }
  }

  async function register() {
    try {
      const jwt = await registerApi(email.value, password.value);
      token.value = jwt;

      console.log('id reçu :', token.value);
    } 
    catch (error) {
      errorMessage.value = error.message;
    }
  }

  return { email, password, token, errorMessage, login };
});
