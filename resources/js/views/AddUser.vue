<template>
    <v-main class="custom-bg-color-gray fill-height">

        <toolbar/>

        <v-container fluid class="mt-2" >
            <v-card>
                <v-card-title> {{user ? 'Edit' : 'Add'}} user</v-card-title>
                <v-card-text>
                    <v-form class="pa-5" @submit.prevent="() => {}">

                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Name" v-model="payload.name"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="6">
                                <v-text-field label="Email" type="email" v-model="payload.email"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select
                                    label="Role"
                                    v-model="payload.role"
                                    :items="roles"
                                    item-text="roleName"
                                    item-value="value"
                                >
                                </v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Password" type="password" v-model="payload.password"/>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn color="primary" @click="submitUser">
                        Submit
                    </v-btn>
                    <v-btn color="warning" @click="resetForm">
                        Reset Form
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>

        <v-snackbar
            v-model="showSuccessToast"
            color="primary"
            right
            :timeout="$store.state.book.notificationTimeout"
        >
            Operation completed successfully
        </v-snackbar>

        <v-snackbar
            v-model="showErrorToast"
            color="red" right :timeout="$store.state.book.notificationTimeout">
            Operation failed..
        </v-snackbar>

    </v-main>
</template>

<script>
    import Toolbar from "../components/toolbar";
    import namedRoutes from "../routes/namedRoutes";
    import {mapState} from "vuex";
    import namedModule from '../store/module-types';
    import namedMutations from '../store/named-mutations';
    import namedActions from '../store/action-types';

    export default {
        name: "AddUser",
        components: {Toolbar},
        props: ['user'],
        computed: {
            ...mapState(namedModule.USERS, ['editSuccess', 'editError', 'addUserError', 'addUserSuccess']),
            showSuccessToast: {
                get() {
                    return this.editSuccess || this.addUserSuccess;
                },

                set() {
                    this.$store.dispatch(namedActions.users_close_success_snackbar);
                }
            },

            showErrorToast: {
                get() {
                    return this.editError || this.addUserError;
                },
                set() {
                    this.$store.dispatch(namedActions.users_close_error_snackbar);
                }
            }
        },
        created() {

            if(!this.$store.getters['user/isAdmin']) this.$router.replace(namedRoutes.home);
            if(this.user) {
                this.loadFromProps();
            }
        },
        data() {
            return {
                drawer: false,

                payload: {
                    id: undefined,
                    name: undefined,
                    password: undefined,
                    email: undefined,
                    role: undefined
                },

                roles: [
                    {
                        roleName: 'Admin' , value: 1,
                    },
                    {
                        roleName: 'Regular', value: 2
                    }
                ]
            }
        },
        methods: {
            loadFromProps(){
                this.payload.id = this.user.id;
                this.payload.name = this.user.name;
                this.payload.email = this.user.email;
                this.payload.role = this.user.role
            },

            resetForm() {
                this.payload = {
                    id: undefined,
                    name: undefined,
                    password: undefined,
                    email: undefined,
                    role: undefined
                }
            },

            submitUser() {
                if(this.user) {
                    this.$store.dispatch('users/updateUser', this.payload);
                }else {
                    this.$store.dispatch('users/addUser', this.payload);
                }
            }
        }
    }
</script>

<style scoped>
    .custom-bg-color-gray {
        background-color: #F2F5F8
    }
</style>
