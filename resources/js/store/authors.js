import mutationTypes from './mutation-types';
import getterTypes from './getter-types';
import {V1API} from '../http/APIPath'
import axios from '../http/axios';

export default {
    namespaced: true,
    state: {
        authors: [],
        loadProcessing: false,
        hasLoadingError: false,

        newAuthorProcessing: false,
        newAuthorError: false,
    },
    getters: {
        [getterTypes.AUTHOR_DATA_PROCESSING]: state => state.loadProcessing,
        [getterTypes.AUTHOR_DATA]: state => state.authors,
    },
    mutations: {
        [mutationTypes.AUTHOR_SET_DATA] (state, payload) {
            state.authors = payload;
        },

        [mutationTypes.AUTHOR_FETCH_PROCESSING] (state, isProcessing) {
            state.loadProcessing = isProcessing;
        },

        [mutationTypes.AUTHOR_FETCH_ERROR] (state, hasError) {
            state.hasLoadingError = hasError;
        },

        [mutationTypes.AUTHOR_NEW_PROCESSING] (state, isProcessing) {
            state.newAuthorProcessing = isProcessing;
        },

        [mutationTypes.AUTHOR_NEW_ERROR] (state, hasError) {
            state.newAuthorError = hasError;
        }
    },
    actions: {
        async fetchAuthors({commit}) {
            commit(mutationTypes.AUTHOR_FETCH_ERROR, false);
            commit(mutationTypes.AUTHOR_FETCH_PROCESSING, true);

            try{
                let response = await axios.get(V1API.author);
                commit(mutationTypes.AUTHOR_SET_DATA, response.data);
            }catch (error) {
                console.error(error);
                commit(mutationTypes.AUTHOR_FETCH_ERROR, true);
            }finally {
                commit(mutationTypes.AUTHOR_FETCH_PROCESSING, false);
            }
        },

        async createAuthor({commit, state}, payload) {
            commit(mutationTypes.AUTHOR_NEW_ERROR, false);
            commit(mutationTypes.AUTHOR_NEW_PROCESSING, true);

            try{
                let response = await axios.post(V1API.author, {
                    author: payload
                });
                // Add the new author to the rest of the data
                state.authors.push(response.data['author']);
            } catch (error) {
                console.error(error);
                commit(mutationTypes.AUTHOR_NEW_ERROR, true);
            }finally {
                commit(mutationTypes.AUTHOR_FETCH_PROCESSING, false);
            }
        },
    }
}
