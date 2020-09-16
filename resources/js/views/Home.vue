<template>
    <v-main class="custom-bg-color-gray fill-height">
        <span class="bg d-none d-sm-none d-md-flex"></span>

        <toolbar/>

        <v-container>
            <v-row justify="start">
                <v-col cols="8">
                    <v-form @submit.prevent="$store.dispatch(require('../store/action-types').default.search_books)">
                        <v-text-field
                            label="Search Here"
                            append-icon="mdi-arrow-right"
                            v-model="query"
                            @click:append="$store.dispatch(require('../store/action-types').default.search_books)"
                        ></v-text-field>
                    </v-form>
                </v-col>
            </v-row>
            <v-row justify="start" class="mx-2">
                <p class="text-xl-h5" v-if="!shouldDisplayResult">
                    Search for books by book title, author name or ISBN
                </p>

                <div v-else>
                    <v-data-iterator
                        v-if="shouldDisplayResult"
                        :items="books"
                        :items-per-page.sync="table.itemsPerPage"
                        :sort-by="table.sortBy.toLowerCase()"
                        :sort-desc="table.sortDec"
                        :search="table.search"
                        hide-default-footer
                    >
                        <template v-slot:header>
<!--                            color="white lighten-5"-->
                            <v-toolbar
                                color="success"
                                flat
                                class="mb-2"
                            >
                                <v-row>
                                        <v-text-field
                                            v-model="table.search"
                                            clearable
                                            flat
                                            solo-inverted
                                            hide-details
                                            prepend-inner-icon="mdi-filter-outline"
                                            label="Filter results"
                                        ></v-text-field>
                                    <v-spacer></v-spacer>
                                    <v-select
                                        v-model="table.sortBy"
                                        flat
                                        solo-inverted
                                        hide-details
                                        :items="table.sortKeys"
                                        prepend-inner-icon="mdi-sort"
                                        label="Sort by"
                                    ></v-select>
                                </v-row>
                            </v-toolbar>
                        </template>
                        <template v-slot:default="props">
                            <div v-for="(item, index) in props.items">
                                <v-card
                                    :key="index"
                                    class="mx-auto my-1"
                                    elevation="1"
                                    width="100%"
                                >
                                    <v-card-text>
                                        <v-row class="mx-1">
                                            <div>{{item.language.toUpperCase()}}</div>
                                            <v-spacer></v-spacer>
                                            <div>{{item.location}}</div>
                                        </v-row>
<!--                                        <p class="display-1 text&#45;&#45;primary">-->
<!--                                            {{item.title}}-->
<!--                                        </p>-->
                                        <v-card-title> {{ item.title }}</v-card-title>
                                        <v-card-subtitle class="pb-1 text-body-1"> {{ aggregateAuthorNames(item.author) }}</v-card-subtitle>
                                        <v-card-text class="pb-0"><span class="text-decoration-underline">Publisher:</span> {{ item.publisher }}</v-card-text>
                                        <v-card-text class="py-0"><span class="text-decoration-underline">ISBN:</span> {{item.isbn}}</v-card-text>
                                        <v-card-text class="mt-1">
                                            <v-row>
                                                <div v-for="(cat, index) in item.category">
                                                    <v-chip :key="index" class="ma-1">
                                                        {{cat.category}}
                                                    </v-chip>
                                                </div>
                                            </v-row>
                                        </v-card-text>
                                    </v-card-text>
                                    <v-divider/>
                                    <v-card-actions v-if="$store.getters['user/isAdmin']">
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                        @click="$router.push({
                                        name: 'add_book',
                                        params: {
                                            book: item
                                        }
                                        })">
                                            Edit
                                        </v-btn>

                                        <v-btn
                                            text
                                            color="red"
                                            @click="showDeleteDialogue(item)">
                                            Delete
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </template>
                    </v-data-iterator>
                    <div v-else>
                        <v-skeleton-loader type="table" v-if="$store.state.book.processing"/>
                    </div>
                </div>
            </v-row>
        </v-container>

<!--        delete confirm-->
        <v-dialog v-model="enableDeleteDialogue" max-width="300">
            <v-card>
                <v-card-title class="headline">
                    Delete Confirmation
                </v-card-title>

                <v-card-text>
                    Are you sure you want to <span class="red--text"> delete </span> the book titled
                    <i>{{ deleteCandidate ? deleteCandidate.title : ''}}</i> ?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="performDelete">
                        Yes
                    </v-btn>
                    <v-btn color="primary" text @click="closeDeleteDialogue">
                        No
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
<!--        delete loader-->
        <v-dialog
            v-model="deleteBookProcessing"
            hide-overlay
            persistent
            width="300">
            <v-card
                color="primary"
                dark>
                <v-card-text>
                    Please wait
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>


    </v-main>
</template>

<script>
    import namedMutations from '../store/named-mutations';
    import namedActions from '../store/action-types';
    import { mapGetters } from "vuex";
    import Toolbar from "../components/toolbar";

    export default {
        name: "Home",
        components: {Toolbar},
        computed: {
            ...mapGetters('book', ["noBooks", 'shouldDisplayResult', 'books', 'deleteBookProcessing']),

            query : {
                get() {
                    return this.$store.state.book.query;
                },

                set (value) {
                    this.$store.commit(namedMutations.BOOK_SET_QUERY, value);
                }
            },
        },

        data() {
            return {
                table: {
                    itemsPerPage: 10,
                    page: 1,
                    search: '',
                    sortDec: false,
                    sortBy: 'name',
                    sortKeys: ['Title', 'Publisher', 'ISBN', 'Language', 'Location', 'Author', 'Category']
                },

                enableDeleteDialogue: false,
                deleteCandidate: undefined,

                drawer: null
            }
        },

        methods: {
            aggregateAuthorNames: (authors) => (authors.map(e=>e.author)).join(', '),
            showDeleteDialogue(payload) {
                this.deleteCandidate = payload;
                this.enableDeleteDialogue = true;
            },
            closeDeleteDialogue() {
                this.deleteCandidate = undefined;
                this.enableDeleteDialogue = false;
            },
            performDelete() {
                if(this.deleteCandidate){
                    this.$store.dispatch(namedActions.delete_book, this.deleteCandidate);
                }
                this.closeDeleteDialogue();
            }
        }
    }
</script>

<style scoped>
    .custom-bg-color-gray {
        background-color: #F2F5F8
    }

    .v-input input {
        font-size: 5em;
    }

    .bg {
        width: 65%;
        height: 100%;
        opacity: 0.6;
        position: absolute;
        background-image: url( '/assets/bg/search.svg');
        background-position: right;
        background-size: contain;
        transform-origin: right bottom;
        bottom: 0;
        right: 0;
        transform: scale(0.8);
    }

</style>
