<template>
    <div>
    <v-card>
        <v-card-title> Add New Category </v-card-title>
        <v-card-text>
            <v-text-field label="Category Name" v-model="name"></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="primary" @click="createCategory"> Add </v-btn>
            <v-btn color="warning" @click="closeCallback"> Cancel </v-btn>
        </v-card-actions>
    </v-card>

    <v-snackbar v-model="displaySuccessToast" color="primary" right :timeout="$store.state.category.notificationTimeout">
        Operation completed successfully
    </v-snackbar>

    <v-snackbar v-model="displayErrorToast" color="red" right :timeout="$store.state.category.notificationTimeout">
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
        name: "addCategory",
        props: {
            closeCallback: { type: Function },
        },
        computed: {
            ...mapState(moduleTypes.CATEGORY, ['newCategoryProcessing', 'newCategoryError', 'newCategorySuccess']),
            displaySuccessToast: {
                get() {
                    return this['newCategorySuccess'];
                },

                set(value) {
                  this.$store.commit(`${moduleTypes.CATEGORY}/${mutationTypes.CATEGORY_NEW_SUCCESS}`, value);
                }
            },

            displayErrorToast: {
                get() {
                    return this['newCategoryError'];
                },

                set(value) {
                    this.$store.commit(`${moduleTypes.CATEGORY}/${mutationTypes.CATEGORY_NEW_ERROR}`, value);
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
            createCategory() {
                this.$store.dispatch(actionTypes.add_category, this.name);
            }
        }
    }
</script>

<style scoped>

</style>
