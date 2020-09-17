<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    import constants from "../constants";
    import namedActions from "../store/action-types";

    export default {
        name: "App.vue",

        created() {
            // Load user information from local storage
            let encodedUserData = localStorage.getItem(constants.LocalStorageKeys.USER);
            if(!encodedUserData) {
                this.$store.dispatch(namedActions.logout);
                return;
            }

            let userInfo = JSON.parse(encodedUserData);
            this.$store.dispatch('user/setRole', userInfo['role']);
        }
    }
</script>

<style scoped>

</style>
