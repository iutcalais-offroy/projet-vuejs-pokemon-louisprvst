import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginApi , registerApi} from './../apis/login.api';


export const useAuthStore = defineStore('auth', () => {
  const email = ref('');
  const password = ref('');
  const confirmpassword = ref('');
  const token = ref(null);
  const errorMessage = ref('');

  async function login() {
    try {

      if(email.value === '' || password.value === '') {
        errorMessage.value = 'Veuillez remplir tous les champs';
        console.log(errorMessage.value);
        return;
      }

      localStorage.removeItem('jwt');
      localStorage.removeItem(isConected);
      
      const jwt = await loginApi(email.value, password.value);
      token.value = jwt;

      localStorage.setItem('jwt', token.value);
    } 
    catch (error) {
      errorMessage.value = error.message;
    }
  }

  async function register() {
    try {

      if(email.value === '' || password.value === '' || confirmpassword.value === '') {
        errorMessage.value = 'Veuillez remplir tous les champs';
        console.log(errorMessage.value);
        return;
      }

      if(password.value !== confirmpassword.value) {
        errorMessage.value = 'Les mots de passe ne correspondent pas';
        console.log(errorMessage.value);
        return;
      }

      const reg = await registerApi(email.value, password.value);

      const jwt = await loginApi(email.value, password.value);
      token.value = jwt;

      localStorage.setItem('jwt', token.value);
    } 
    catch (error) {
      errorMessage.value = error.message;
    }
  }

  return { email, password, confirmpassword, token, errorMessage, login , register};
});
