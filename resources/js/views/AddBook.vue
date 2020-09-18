<template>
    <v-main class="custom-bg-color-gray fill-height">

        <toolbar/>

        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <v-btn color="primary">
                    Import From Excel
                </v-btn>
            </v-row>
            <v-card elevation="1" class="mt-10 mx-md-12">
                <v-card-title> {{book ? 'Edit' : 'Add'}} Book </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="submitBook" class="mx-8">
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
                            <v-col cols="11">
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
                            <v-col cols="1">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{on, attrs}">
                                        <v-btn icon v-bind="attrs" v-on="on" @click="showAddAuthor = !showAddAuthor">
                                            <v-icon>mdi-plus-circle</v-icon>
                                        </v-btn>
                                    </template>
                                    <span> Add Author</span>
                                </v-tooltip>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="11">
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
                            <v-col class="1">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{on, attrs}">
                                        <v-btn icon v-bind="attrs" v-on="on" @click="showAddCategory = !showAddCategory">
                                            <v-icon>mdi-plus-circle</v-icon>
                                        </v-btn>
                                    </template>
                                    <span> Add Category</span>
                                </v-tooltip>
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
                            <v-btn color="primary" type="submit" @click="submitBook" :loading="this[getters.BOOK_NEW_PROCESSING] || this[getters.BOOK_UPDATE_PROCESSING]">
                                Submit
                            </v-btn>

                            <v-btn color="warning" @click="resetForm">
                                Reset Form
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>

        <v-dialog v-model="showAddAuthor" width="300">
            <AddAuthor :close-callback="closeAddAuthorDialogue"/>
        </v-dialog>

        <v-dialog v-model="showAddCategory" width="300">
            <AddCategory :close-callback="closeAddCategoryDialogue"/>
        </v-dialog>

        <v-dialog v-model="showImportDialogue" width="300">
            <v-card class="pa-4">
                <v-file-input show-size accept=".xlsx" label="XLSX Excel File" @change="selectExcelFile"></v-file-input>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="showImportDialogue = !showImportDialogue"> Submit </v-btn>
                    <v-btn color="warning" @click="showImportDialogue = !showImportDialogue"> Close </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-snackbar
            v-model="displaySuccessSnackbar"
            color="primary"
            right
            :timeout="$store.state.book.notificationTimeout"
        >
            Operation completed successfully
        </v-snackbar>

        <v-snackbar
            v-model="displayErrorSnackbar"
            color="red" right :timeout="$store.state.book.notificationTimeout">
            Operation failed..
        </v-snackbar>

    </v-main>
</template>

<script>
    import { mapGetters } from "vuex";
    import namedGetters from '../store/getter-types';
    import moduleTypes from '../store/module-types';
    import actionTypes from '../store/action-types';
    import auth from "../store/auth";
    import Toolbar from "../components/toolbar";
    import AddAuthor from "../components/addAuthor";
    import AddCategory from "../components/addCategory";

    export default {
        name: "AddBook",
        components: {AddCategory, AddAuthor, Toolbar},
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
            ...mapGetters(moduleTypes.BOOK, [namedGetters.BOOK_UPDATE_SUCCESS, namedGetters.BOOK_UPDATE_PROCESSING,
                namedGetters.BOOK_NEW_SUCCESS, namedGetters.BOOK_NEW_PROCESSING, namedGetters.BOOK_NEW_ERROR,
                namedGetters.BOOK_UPDATE_ERROR
                ]),
            getters: () => require('../store/getter-types'),
            displaySuccessSnackbar: {
                get() {
                    return this[namedGetters.BOOK_NEW_SUCCESS] || this[namedGetters.BOOK_UPDATE_SUCCESS];
                },

                set(val) {
                    this.$store.dispatch(actionTypes.book_close_success_snackbar);
                }
            },
            displayErrorSnackbar: {
                get() {
                    return this[namedGetters.BOOK_NEW_ERROR] || this[namedGetters.BOOK_UPDATE_ERROR];
                },
                set(val) {
                    this.$store.dispatch(actionTypes.book_close_error_snackbar);
                }
            }
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

                drawer: null,
                showAddAuthor: false,
                showAddCategory: false,
                showImportDialogue: false,

                selectedFile: undefined,
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
                this.shelf =  undefined;
                this.row = undefined;
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
                this.payload.category = this.categories;

                if(!this.book) {
                    this.$store.dispatch(actionTypes.add_book, this.payload);
                } else {
                    this.$store.dispatch(actionTypes.update_book, this.payload);
                }
            },
            selectExcelFile(file) {
                this.selectedFile = file;
            },
            submitFile() {

            },

            closeAddAuthorDialogue() {
                this.showAddAuthor = !this.showAddAuthor;
            },

            closeAddCategoryDialogue() {
                this.showAddCategory = !this.showAddCategory;
            }
        }
    }
</script>

<style scoped>
    .custom-bg-color-gray {
        background-color: #F2F5F8
    }
</style>
