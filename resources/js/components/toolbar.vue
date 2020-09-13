<template>
    <div>
        <v-toolbar color="success" flat>
            <v-app-bar-nav-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title class="pt-3 pl-sm-10">
                <v-img src="https://i.imgur.com/QtNlFK7.png" aspect-ratio="21/9" height="60" width="140"/>
            </v-toolbar-title>
            <v-spacer class="hidden-sm-and-down" />
            <v-toolbar-items class="hidden-sm-and-down" >
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
    export default {
        name: "toolbar",
        data() {
            return {
                drawer: null
            }
        }
    }
</script>

<style scoped>

</style>
