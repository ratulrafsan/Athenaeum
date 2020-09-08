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
            <v-card elevation="1" >
                <v-card-title> {{book ? 'Edit' : 'Add'}} Books </v-card-title>
                <v-card-text>
                    <v-form>
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
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
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
        },

        computed: {
            authors() {

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
                authors: []
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
                }
            },

            loadPayloadFromProp(){
                this.payload = {
                    id: this.book.id,
                    title: this.book.title,
                    author: this.book.author,
                    publisher: this.book.publisher,
                    isbn: this.book.isbn,
                    location: this.book.location,
                    category: this.book.category,
                    language: this.book.language
                }
            }
        }
    }
</script>

<style scoped>

</style>
