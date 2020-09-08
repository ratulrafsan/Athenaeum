import mutationTypes from './mutation-types';
import getterTypes from './getter-types';
import {V1API} from '../http/APIPath'
import axios from '../http/axios';

export default {
    namespaced: true,
    state: {
        categories: [],
        loadProcessing: false,
        hasLoadingError: false,

        newCategoryProcessing: false,
        newCategoryError: false,
    },
    getters: {
        [getterTypes.CATEGORY_DATA_PROCESSING]: state => state.loadProcessing,
        [getterTypes.CATEGORY_DATA]: state => state.categories,
    },
    mutations: {
        [mutationTypes.CATEGORY_SET_DATA] (state, payload) {
            state.categories = payload;
        },

        [mutationTypes.CATEGORY_FETCH_PROCESSING] (state, isProcessing) {
            state.loadProcessing = isProcessing;
        },

        [mutationTypes.CATEGORY_FETCH_ERROR] (state, hasError) {
            state.hasLoadingError = hasError;
        },

        [mutationTypes.CATEGORY_NEW_PROCESSING] (state, isProcessing) {
            state.newCategoryProcessing = isProcessing;
        },

        [mutationTypes.CATEGORY_NEW_ERROR] (state, hasError) {
            state.newCategoryError = hasError;
        }
    },
    actions: {
        async fetchCategories({commit}) {
            commit(mutationTypes.CATEGORY_FETCH_ERROR, false);
            commit(mutationTypes.CATEGORY_FETCH_PROCESSING, true);

            try{
                let response = await axios.get(V1API.category);
                commit(mutationTypes.CATEGORY_SET_DATA, response.data);
            }catch (error) {
                console.error(error);
                commit(mutationTypes.CATEGORY_FETCH_ERROR, true);
            }finally {
                commit(mutationTypes.CATEGORY_FETCH_PROCESSING, false);
            }
        },

        async createCategory({commit, state}, payload) {
            commit(mutationTypes.CATEGORY_NEW_ERROR, false);
            commit(mutationTypes.CATEGORY_NEW_PROCESSING, true);

            try{
                let response = await axios.post(V1API.category, {
                    category: payload
                });
                // Add the new category to the rest of the data
                state.categories.push(response.data['category']);
            } catch (error) {
                console.error(error);
                commit(mutationTypes.CATEGORY_NEW_ERROR, true);
            }finally {
                commit(mutationTypes.CATEGORY_NEW_PROCESSING, false);
            }
        },
    }
}
