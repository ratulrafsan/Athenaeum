<template>
    <v-main class="fill-height custom-bg-color-gray">

        <toolbar/>

        <v-container fluid>
            <v-row>
                <v-spacer/>
                <v-btn color="primary" class="mr-5" :to="require('../routes/namedRoutes').default.addUser">
                    Add User
                </v-btn>
            </v-row>
            <v-data-table
                class="mt-5"
                :loading="fetchProcessing"
                v-if="!fetchError"
                :items="users"
                :headers="table.headers"
            >
                <template v-slot:item.role="{item}">
                    {{item.role === 1 ? 'Admin' : 'Regular'}}
                </template>

                <template v-slot:item.action="{item}">
                    <v-btn icon @click="showDeleteDialogue(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon @click="editUser(item)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
            <div v-else>
                Loading failed. Try again?
                <v-btn type="primary" class="pl-2" @click="loadUsers">
                    Retry
                </v-btn>
            </div>
        </v-container>

        <!--        delete confirm-->
        <v-dialog v-model="enableDeleteDialogue" max-width="300">
            <v-card>
                <v-card-title class="headline">
                    Delete Confirmation
                </v-card-title>

                <v-card-text>
                    Are you sure you want to <span class="red--text"> delete </span> user
                    <i>{{ deleteCandidate ? deleteCandidate.name : ''}}</i> ?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text @click="deleteUser(deleteCandidate.id)">
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
            v-model="deleteProcessing"
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
    import {mapState} from 'vuex';
    import moduleNames from '../store/module-types';
    import namedActions from '../store/action-types';
    import store from "../store/store";
    import Toolbar from "../components/toolbar";
    import namedRoutes from "../routes/namedRoutes";

    export default {
        name: "Users.vue",
        components: {Toolbar},
        computed: {
            ...mapState(moduleNames.USERS, ['users', 'fetchProcessing', 'fetchError', 'deleteProcessing', 'deleteSuccess'])
        },
        created() {
            if(!this.$store.getters['user/isAdmin']) this.$router.replace(namedRoutes.home);
           this.loadUsers();
        },

        data() {
            return{
                drawer: null,
                deleteCandidate: undefined,
                enableDeleteDialogue: false,

                table: {
                    headers: [
                        {text: 'Name', value: 'name'},
                        {text: 'Role', value: 'role'},
                        {text: 'Email', value: 'email'},
                        {text: 'Action', value: 'action'}
                    ]
                }
            }
        },

        methods: {
            loadUsers() {
                this.$store.dispatch(namedActions.load_users);
            },
            showDeleteDialogue(payload) {
                this.deleteCandidate = payload;
                this.enableDeleteDialogue = true;
            },
            closeDeleteDialogue() {
                this.deleteCandidate = undefined;
                this.enableDeleteDialogue = false;
            },
            deleteUser(id){
                this.$store.dispatch(namedActions.delete_user, id);
                this.closeDeleteDialogue();
            },

            editUser(payload) {
                this.$router.push({name: 'add_user', params: {user: payload}});
            }
        }
    }
</script>

<style scoped>
    .custom-bg-color-gray {
        background-color: #F2F5F8
    }
</style>
