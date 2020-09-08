import "./bootstrap";
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import Route from './routes/routes';
import Store from './store/store';
import axios from './http/axios';

import App from './views/App'

Vue.prototype.$http = axios;


 new Vue({
    el: "#app",
    vuetify,
    router: Route,
    store: Store,
    render: h => h(App)
}).$mount();
