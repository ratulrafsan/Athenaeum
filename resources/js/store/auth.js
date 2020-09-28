import axios from '../http/axios';
import {V1API} from "../http/APIPath";
import constants from "../constants";
import router from "../routes/routes";
import namedRoutes from "../routes/namedRoutes";
import mutationTypes from "./mutation-types";
import http from "../http/axios";

export default {
    namespaced: true,
    state: {
        authError: false,
        authProcessing: false,
        token: undefined,
    },
    mutations: {
        [mutationTypes.AUTH_ERROR] (state, hasError) {
            state.authError = hasError;
        },

        [mutationTypes.AUTH_SET_TOKEN] (state, token) {
            state.token = token;
        },

        [mutationTypes.AUTH_PROCESSING] (state, isProcessing) {
            state.authProcessing = isProcessing;
        }
    },
    actions: {
        async login({commit}, payload) {
            commit(mutationTypes.AUTH_ERROR, false);
            commit(mutationTypes.AUTH_PROCESSING, true);

            try{
                let response = await axios.post(V1API.login, {
                    email: payload.email,
                    password: payload.password
                });

                commit('user/setRole', response.data['user']['role'], { root: true })
                // save user object in local storage
                localStorage.setItem(constants.LocalStorageKeys.USER, JSON.stringify(response.data['user']));

                // save the token in local storage
                localStorage.setItem(
                    constants.LocalStorageKeys.TOKEN,
                    response.data['token']
                );

                // attach the bearer token to axios
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

                // navigate to home page
                router.push(router.currentRoute.query.to ?? namedRoutes.home)
                    .catch(e=>console.info(e));

                commit(mutationTypes.AUTH_SET_TOKEN, response.data['token']);
            } catch (error) {
                commit(mutationTypes.AUTH_ERROR, true);
                console.error(error);
            }

            commit(mutationTypes.AUTH_PROCESSING, false);
        },

        async logout() {
            localStorage.removeItem(constants.LocalStorageKeys.USER);
            localStorage.removeItem(constants.LocalStorageKeys.TOKEN);
            // redirect user back to login page
            // If we are already on the login page then do nothing
            if(router.history.current.path !== namedRoutes.login) {
                router.push({name: 'login', query: {to: router.history.current.fullPath}}).catch(e=>console.log(e));
            }
        }
    }
}
