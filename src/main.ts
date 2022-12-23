import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus';
import Menu from './components/Menu.vue';
import router from './router';
import axios from 'axios'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.component("Menu",Menu);
app.config.globalProperties.$axios=axios;
app.mount('#app')
