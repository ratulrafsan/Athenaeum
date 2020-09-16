<template>
    <div>
    <v-card>
        <v-card-title> Add New Author </v-card-title>
        <v-card-text>
            <v-text-field label="Author Name" v-model="name"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="primary" @click="createAuthor"> Add </v-btn>
            <v-btn color="warning" @click="closeCallback"> Cancel </v-btn>
        </v-card-actions>
    </v-card>

    <v-snackbar v-model="displaySuccessToast" color="primary" right :timeout="$store.state.author.notificationTimeout">
        Operation completed successfully
    </v-snackbar>

    <v-snackbar v-model="displayErrorToast" color="red" right :timeout="$store.state.author.notificationTimeout">
        Operation failed..
    </v-snackbar>
</div>
</template>

<script>
    import actionTypes from '../store/action-types';
    import mutationTypes from '../store/mutation-types';
    import moduleTypes from '../store/module-types';
    import {mapState} from 'vuex';

    export default {
        name: "addAuthor",
        props: {
            closeCallback: { type: Function },
        },
        computed: {
            ...mapState(moduleTypes.AUTHOR, ['newAuthorProcessing', 'newAuthorError', 'newAuthorSuccess']),
            displaySuccessToast: {
                get() {
                    return this['newAuthorSuccess'];
                },

                set(value) {
                  this.$store.commit(`${moduleTypes.AUTHOR}/${mutationTypes.AUTHOR_NEW_SUCCESS}`, value);
                }
            },

            displayErrorToast: {
                get() {
                    return this['newAuthorError'];
                },

                set(value) {
                    this.$store.commit(`${moduleTypes.AUTHOR}/${mutationTypes.AUTHOR_NEW_ERROR}`, value);
                }
            }
        },
        watch: {
          displaySuccessToast(newValue, oldValue) {
              if(newValue) this.closeCallback();
          }
        },
        data() {
            return {
                name: undefined
            }
        },

        methods: {
            createAuthor() {
                this.$store.dispatch(actionTypes.add_author, this.name);
            }
        }
    }
</script>

<style scoped>

</style>
