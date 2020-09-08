<template>
    <v-main class="custom-bg-color-gray fill-height">
        <v-toolbar color="success" flat>
            <v-toolbar-title> logo here</v-toolbar-title>

            <v-spacer/>

            <v-btn class="font-weight-light" text x-large :to="require('../routes/namedRoutes').default.addBook">
                Add Book
            </v-btn>

            <v-btn class="font-weight-light" text x-large>
                Users
            </v-btn>

            <v-btn class="font-weight-light" text x-large @click="this.$store.dispatch(require('../store/action-types').default.logout)">
                Logout
            </v-btn>
        </v-toolbar>

        <v-container>
            <v-card elevation="1" class="mt-10 mx-md-12">
                <v-card-title> {{book ? 'Edit' : 'Add'}} Books </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="book ? updateBook : submitBook">
                        <v-row class="mx-1">
                            <v-text-field label="Book Title" v-model="payload.title"/>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field label="Publisher" v-model="payload.publisher"/>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="ISBN" v-model="payload.isbn"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-autocomplete
                                    v-model="authors"
                                    :disabled="this[getters.AUTHOR_DATA_PROCESSING]"
                                    :items="this[getters.AUTHOR_DATA]"
                                    chips
                                    item-text="author"
                                    item-value="id"
                                    multiple
                                    label="Authors"
                                >
                                    <template v-slot:selection="data">
                                        <v-chip
                                            v-bind="data.attrs"
                                            :input-value="data.selected"
                                            close
                                            @click="data.select"
                                            @click:close="removeAuthorFromSelection(data.item)"
                                        >
                                            {{ data.item.author }}
                                        </v-chip>
                                    </template>
                                </v-autocomplete>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-autocomplete
                                    v-model="categories"
                                    :disabled="this[getters.CATEGORY_DATA_PROCESSING]"
                                    :items="this[getters.CATEGORY_DATA]"
                                    chips
                                    item-text="category"
                                    item-value="id"
                                    multiple
                                    label="Categories"
                                >
                                    <template v-slot:selection="data">
                                        <v-chip
                                            v-bind="data.attrs"
                                            :input-value="data.selected"
                                            close
                                            @click="data.select"
                                            @click:close="removeCategoryFromSelection(data.item)"
                                        >
                                            {{ data.item.category }}
                                        </v-chip>
                                    </template>
                                </v-autocomplete>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="4">
                                <v-text-field v-model="shelf" label="Shelf Number"/>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field v-model="row" label="Row Number"/>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field v-model="payload.language" label="Language"/>
                            </v-col>
                        </v-row>

                        <v-card-actions>
                            <v-spacer/>
                            <v-btn color="primary" type="submit" @click="submitBook">
                                Submit
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
    import { mapGetters } from "vuex";
    import namedGetters from '../store/getter-types';
    import moduleTypes from '../store/module-types';
    import actionTypes from '../store/action-types';
    import auth from "../store/auth";

    export default {
        name: "AddBook",

        props: {
            book: undefined
        },

        created() {
            // If book property is set then load the book info in payload
            if(this.book) {
                this.loadPayloadFromProp();
            }

            this.$store.dispatch(actionTypes.load_authors);
            this.$store.dispatch(actionTypes.load_categories);
        },

        computed: {
            ...mapGetters(moduleTypes.AUTHOR, [namedGetters.AUTHOR_DATA_PROCESSING, namedGetters.AUTHOR_DATA]),
            ...mapGetters(moduleTypes.CATEGORY, [namedGetters.CATEGORY_DATA_PROCESSING, namedGetters.CATEGORY_DATA]),
            getters: () => require('../store/getter-types')
        },

        data() {
            return {
                payload: {
                    id: undefined,
                    title: undefined,
                    author: undefined,
                    publisher: undefined,
                    isbn: undefined,
                    location: undefined,
                    category: undefined,
                    language: undefined
                },
                authors: [],
                categories: [],
                shelf: undefined,
                row: undefined,
            }
        },

        methods: {
            resetForm() {
                this.payload = {
                    id: undefined,
                    title: undefined,
                    author: undefined,
                    publisher: undefined,
                    isbn: undefined,
                    location: undefined,
                    category: undefined,
                    language: undefined
                };

                this.authors = [];
                this.categories = [];
            },

            loadPayloadFromProp(){
                this.payload = {
                    id: this.book.id,
                    title: this.book.title,
                    author: this.book.author,
                    category: this.book.category,
                    publisher: this.book.publisher,
                    isbn: this.book.isbn,
                    location: this.book.location,
                    language: this.book.language
                }

                // Extract author & category ID
                this.authors = this.book.author.map(e => e.id);
                this.categories = this.book.category.map(e => e.id);
                [this.shelf, this.row] = this.book.location.split(',').map(e => e.split(':')[1].trim());
            },

            removeAuthorFromSelection(author) {
                const index = this.authors.indexOf(author.id);
                if(index >= 0) this.authors.splice(index, 1);
            },

            removeCategoryFromSelection(category) {
                const index= this.categories.indexOf(category.id);
                if(index >= 0) this.categories.splice(index, 1);
            },

            submitBook() {
                this.payload.location = `Shelf: ${this.shelf}, Row: ${this.row}`;
                this.payload.author = this.authors;
                this.payload.category = this.categories

                this.$store.dispatch(actionTypes.add_book, this.payload);
            },

            updateBook() {
                console.log('update book called')
            }
        }
    }
</script>

<style scoped>
    .custom-bg-color-gray {
        background-color: #F2F5F8
    }
</style>
