import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/main.scss';
import './config/fontawesome.config';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.component('FaIcon', FontAwesomeIcon);

app.mount('#app');
