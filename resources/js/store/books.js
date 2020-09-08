import mutationTypes from './mutation-types';
import axios from '../http/axios';
import {V1API} from  '../http/APIPath';

export default {
    namespaced: true,
    state: {
        books: undefined,
        processing: false,
        hasError: false,
        query: undefined,
    },

    getters: {
        noBooks: state => {
            /// If books is undefined return false
            if(state.books === undefined) return false;
            /// otherwise check for the book length
            return state.books.length === 0;
        },

        shouldDisplayResult: state => {
            return state.books !== undefined;
        },

        books: state => {
            return state.books ? state.books: [];
        },

        count: state => {
            return state.books ? state.books.length : 0;
        }
    },

    mutations: {
        [mutationTypes.BOOK_SET_DATA] (state, payload) {
            state.books = payload;
        },

        [mutationTypes.BOOK_PROCESSING] (state, isProcessing) {
            state.processing = isProcessing;
        },

        [mutationTypes.BOOK_ERROR] (state, hasError) {
            state.hasError = hasError;
        },

        [mutationTypes.BOOK_SET_QUERY] (state, query) {
            state.query = query;
        }
    },
    actions: {
        async fetchBooks({commit, state}, payload) {
            commit(mutationTypes.BOOK_ERROR, false);
            commit(mutationTypes.BOOK_PROCESSING, true);

            // if payload is empty then fetch the query from state
            if(!payload) {
                payload = state.query;
            }

            try{
                let response = await axios.post(V1API.search_books, {
                    term: payload
                });

                commit(mutationTypes.BOOK_SET_DATA, response.data);
            }catch (error) {
                console.error(error);
                commit(mutationTypes.BOOK_ERROR, true);
            }

            commit(mutationTypes.BOOK_PROCESSING, false);
        }
    }
}
