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

        newBookProcessing: false,
        newBookError: false,

        updateBookProcessing: false,
        updateBookError: false,

        deleteBookProcessing: false,
        deleteBookError: false,
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

        deleteBookProcessing: state => {
            return state.deleteBookProcessing;
        },

        books: state => {
            return state.books ? state.books: [];
        },

        count: state => {
            return state.books ? state.books.length : 0;
        },
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
        },

        [mutationTypes.BOOK_NEW_ERROR] (state, hasError) {
            state.newBookError = hasError;
        },

        [mutationTypes.BOOK_NEW_PROCESSING] (state, isProcessing) {
            state.newBookProcessing = isProcessing;
        },

        [mutationTypes.BOOK_UPDATE_PROCESSING] (state, isProcessing) {
            state.updateBookProcessing = isProcessing;
        },

        [mutationTypes.BOOK_UPDATE_ERROR] (state, hasError) {
            state.updateBookError = hasError;
        },

        [mutationTypes.BOOK_DELETE_PROCESSING] (state, isProcessing) {
            state.deleteBookProcessing = isProcessing;
        },

        [mutationTypes.BOOK_DELETE_ERROR] (state, hasError) {
            state.deleteBookError = hasError;
        },

        [mutationTypes.BOOK_UPDATE_SUCCESS] (state, success) {

        },

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
            }finally {
                commit(mutationTypes.BOOK_PROCESSING, false);
            }
        },

        async addBook({commit}, payload) {
            commit(mutationTypes.BOOK_NEW_PROCESSING, true);
            commit(mutationTypes.BOOK_NEW_ERROR, false);

            try{
                let response = await axios.post(V1API.book, {
                    title: payload.title,
                    isbn: payload.isbn,
                    author: payload.author,
                    category: payload.category,
                    language: payload.language,
                    publisher: payload.publisher,
                    location: payload.location
                });
            }catch(error) {
                console.error(error);
                commit(mutationTypes.BOOK_NEW_ERROR, true);
            }finally {
                commit(mutationTypes.BOOK_NEW_PROCESSING, false);
            }
        },

        async updateBook({commit, dispatch}, payload) {
            commit(mutationTypes.BOOK_UPDATE_PROCESSING, true);
            commit(mutationTypes.BOOK_UPDATE_ERROR, false);

            try{
                let response = await axios.put(V1API.book, {
                    id: payload.id,
                    title: payload.title,
                    isbn: payload.isbn,
                    author: payload.author,
                    category: payload.category,
                    language: payload.language,
                    publisher: payload.publisher,
                    location: payload.location
                });

                dispatch('fetchBooks');

            }catch(error) {
                console.error(error);
                commit(mutationTypes.BOOK_UPDATE_ERROR, true);
            }finally {
                commit(mutationTypes.BOOK_UPDATE_PROCESSING, false);
            }
        },
        async deleteBook({commit, dispatch}, payload) {
            commit(mutationTypes.BOOK_DELETE_PROCESSING, true);
            commit(mutationTypes.BOOK_DELETE_ERROR, false);
            
            try{
                let response = await axios.delete(V1API.book, {
                    data: {
                        id: payload.id
                    }
                });

                dispatch('fetchBooks');

            }catch(error) {
                console.error(error);
                commit(mutationTypes.BOOK_DELETE_ERROR,true);
            }finally {
                commit(mutationTypes.BOOK_DELETE_PROCESSING, false);
            }
        }
    }
}
