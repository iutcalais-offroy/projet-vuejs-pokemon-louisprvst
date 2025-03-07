import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import {router} from './router';
import NaiveUI from 'naive-ui';


const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router)
app.use(NaiveUI);
app.mount('#app');
