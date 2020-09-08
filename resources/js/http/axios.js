import axios from 'axios';
import constants from "../constants";
import store from "../store/store";
import namedActions from '../store/action-types'
import router from '../routes/routes'
import namedRoutes from "../routes/namedRoutes";

const baseURL = '';

const http = axios.create({baseURL});

// Check the local storage for bearer token
const accessToken = localStorage.getItem(constants.LocalStorageKeys.TOKEN);
if(accessToken) {
    http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

// Intercept 401 - Authorization errors and redirect user to login page
// TODO: Add login page

http.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const { config, response } = error;
        const originalRequest = config;

        if(response && response.status === 401) {
            await store.dispatch(namedActions.logout);
        }

        return Promise.reject(error);
    }
)


export default http;
