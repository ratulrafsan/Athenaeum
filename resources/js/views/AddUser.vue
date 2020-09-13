<template>
    <v-main class="custom-bg-color-gray fill-height">

        <toolbar/>

        <v-container fluid class="mt-2" >
            <v-card>
                <v-card-title> {{user ? 'Edit' : 'Add'}} user</v-card-title>
                <v-card-text>
                    <v-form class="pa-5" @submit.prevent="submitUser">

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

                        <v-row v-if="!user">
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
    </v-main>
</template>

<script>
    import Toolbar from "../components/toolbar";
    import namedRoutes from "../routes/namedRoutes";
    export default {
        name: "AddUser",
        components: {Toolbar},
        props: ['user'],
        computed: {
            showSuccessToast: {
                get() {

                },

                set() {

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
