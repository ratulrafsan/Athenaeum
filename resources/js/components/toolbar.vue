<template>
    <div>
        <v-toolbar color="success" flat>
            <v-app-bar-nav-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title class="pt-3 pl-sm-10" style="cursor: pointer" @click="$router.push('/home')">
                <img :src="logoImage" alt="Saheen Library" width="140" height="60"/>
<!--                <v-img :src="require('../../assets/logo/logo.png')" aspect-ratio="21/9" height="60" width="140"/>-->
            </v-toolbar-title>
            <v-spacer class="hidden-sm-and-down" />
            <v-text-field
                class="mt-5 hidden-sm-and-down"
                @keydown.native.enter.prevent="$store.dispatch(require('../store/action-types').default.search_books)"
                label="Search For Books"
                v-model="query"
                append-icon="mdi-arrow-right"
                @click:append="$store.dispatch(require('../store/action-types').default.search_books)"
            ></v-text-field>
            <v-toolbar-items class="hidden-sm-and-down" >
                <v-btn class="font-weight-light" text x-large @click="$router.push('/home')">
                    Home
                </v-btn>
                <v-btn class="font-weight-light" text x-large @click="$store.dispatch(require('../store/action-types').default.export_book)">
                    Download Database
                </v-btn>
                <v-btn class="font-weight-light" text x-large :to="require('../routes/namedRoutes').default.addBook" v-if="$store.getters['user/isAdmin']">
                    Add Book
                </v-btn>

                <v-btn class="font-weight-light" text x-large :to="require('../routes/namedRoutes').default.manageUser" v-if="$store.getters['user/isAdmin']">
                    Users
                </v-btn>

                <v-btn class="font-weight-light" text x-large @click="$store.dispatch(require('../store/action-types').default.logout)">
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            width = "200"
            id = "drawer"
        >
            <v-list>
                <v-list-item>
                    <v-list-item-content v-if="$store.getters['user/isAdmin']">
                        <v-btn class="font-weight-light" text x-large :to="require('../routes/namedRoutes').default.addBook">
                            Add Book
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="$store.getters['user/isAdmin']">
                    <v-list-item-content>
                        <v-btn class="font-weight-light" text x-large :to="require('../routes/namedRoutes').default.manageUser">
                            Users
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-btn class="font-weight-light" text x-large @click="$store.dispatch(require('../store/action-types').default.logout)">
                            Logout
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import namedMutations from "../store/named-mutations";

    export default {
        name: "toolbar",
        data() {
            return {
                drawer: null
            }
        },

        computed: {
            logoImage() {
                return `${window.location.protocol}//${window.location.hostname}${window.location.port === "8000" ? ":8000" : ""}/assets/logo/logo.png`;
            },
            query : {
                get() {
                    return this.$store.state.book.query;
                },

                set (value) {
                    this.$store.commit(namedMutations.BOOK_SET_QUERY, value);
                }
            },
        }
    }
</script>

<style scoped>

</style>
