<template>
        <v-container class="fill-height custom-bg-color-gray" fluid :class="{ 'custom-bg-image': $vuetify.breakpoint.mdAndUp}">
            <v-row align-md="center" justify-md="start" justify-sm="center" >
                <v-col md="6" lg="4" offset-md="1">
                    <v-card class="elevation-1">
                        <v-card-title>
                            Sign In
                        </v-card-title>

                        <v-card-text class="px-8">
                            <v-form>
                                <v-text-field
                                    label="Login"
                                    name="login"
                                    prepend-inner-icon="mdi-email"
                                    type="text"
                                    v-model="input.email"
                                    hint="the email address you used to sign in"
                                    :rules="[rules.required]"
                                />
                                <v-text-field
                                    label="Password"
                                    name="password"
                                    prepend-inner-icon="mdi-lock"
                                    v-model="input.password"
                                    :rules="[rules.required]"
                                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showPassword ? 'text' : 'password'"
                                    @click:append="showPassword = !showPassword"
                                />
                            </v-form>

<!--                            submit button -->
                            <v-row justify="center" align="center">
                                <v-btn
                                    color="primary"
                                    :loading="loginInProgress"
                                    @click="attemptLogin"
                                >
                                    Submit
                                </v-btn>
                            </v-row>

<!--                            forgot password option-->
                            <v-row justify="center" align="center" class="pt-2">
                                <p class="text-body-1"> Forgot your password? </p>
                            </v-row>

<!--                            new account -->
                            <v-row justify="center" align="center" class="mt-n2">
                                <p class="text-body-1"> Don't have an account?
                                    <span class="primary--text">
                                        <router-link :to="toContactPage()">
                                            Contact Us.
                                        </router-link>
                                    </span>
                                </p>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-snackbar right :timeout="10000" color="error" v-model="snackbar">
                Login Failed. Incorrect credentials.
            </v-snackbar>
        </v-container>
</template>

<script>
    import namedRoutes from "../routes/namedRoutes";
    import namedActions from "../store/action-types";
    import constants from "../constants";

    export default {
        name: "Login",

        data() {
            return {
                input: {
                    email : undefined,
                    password: undefined
                },

                rules: {
                    required: value => !!value || 'Required',
                },

                showPassword: false,
                snackbar: false
            }
        },
        created() {
            if(localStorage.getItem(constants.LocalStorageKeys.TOKEN)) this.$router.push(namedRoutes.home);
        },

        computed: {
          loginError() {
              return this.$store.state.auth.authError;
          },

          loginInProgress() {
              return this.$store.state.auth.authProcessing;
          }
        },

        methods: {
            toContactPage() {
                return namedRoutes.contact;
            },

            async attemptLogin() {
                await this.$store.dispatch(namedActions.login, this.input);

                if(this.$store.state.auth.authError) {
                    this.snackbar = true;
                }
            }
        }
    }
</script>

<style scoped>
    .custom-bg-color-gray {
        background-color: #F2F5F8;
    }

    .custom-bg-image {
        background-image: url("/assets/bg/signin.svg");
        background-position: right;
        background-repeat: no-repeat;
    }
</style>
