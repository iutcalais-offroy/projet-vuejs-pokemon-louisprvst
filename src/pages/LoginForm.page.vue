<template>

  <div style="max-width: 400px; margin: 0 auto; padding: 20px;">

    <n-tabs v-model:active="activeTab">

      <n-tab-pane name="login" tab="Connexion">

        <h2 style="text-align: center; margin-bottom: 20px;">Connexion</h2>

        <form @submit.prevent="store.login">
          <n-input
            v-model:value="store.email"
            type="email"
            placeholder="Entrez votre email"
            clearable
            required
            style="margin-bottom: 20px;"
          />
          <n-input
            v-model:value="store.password"
            type="password"
            placeholder="Entrez votre mot de passe"
            clearable
            required
            style="margin-bottom: 20px;"
          />
          <n-button type="primary" block size="large" @click="store.login">
            Se connecter 
          </n-button>
        </form>
      </n-tab-pane> 

      <n-tab-pane name="regster" tab="Inscription">

        <h2 style="text-align: center; margin-bottom: 20px;">Inscription</h2>

        <form @submit.prevent="store.register">
          <n-input
            v-model:value="store.email"
            type="email"
            placeholder="Entrez votre email"
            clearable
            required
            style="margin-bottom: 20px;"
          />
          <n-input
            v-model:value="store.password"
            type="password"
            placeholder="Entrez votre mot de passe"
            clearable
            required
            style="margin-bottom: 20px;"
          />
          <n-input
            v-model:value="store.confirmpassword"
            type="password"
            placeholder="Confirmez votre mot de passe"
            clearable
            required
            style="margin-bottom: 20px;"
          />
          <n-button type="primary" block size="large" @click="store.register">
            S'inscrire
          </n-button>
        </form>
       
      </n-tab-pane>
    </n-tabs>
  </div>
</template>



<script>
import { useAuthStore } from "./../store/login.store.js";

export default {
  setup() {
    const store = useAuthStore();
    const activeTab = ref('login');
    return { store, activeTab };
  },
};
</script>



<style scoped>
</style>