import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import BaseLoading from "./components/base/loading/BaseLoading.vue";


const app = createApp(App);
app.component("BaseLoading", BaseLoading);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.mount('#app')
