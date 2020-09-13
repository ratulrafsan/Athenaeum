<template>
    <v-main class="fill-height">
        <v-container class="fill-height custom-bg-color-green py-0" fluid>
            <v-row :class="{'height-50' : $vuetify.breakpoint.mdAndUp}" justify="center" align="center">
                <v-col col="4" v-show="$vuetify.breakpoint.mdAndUp" class="fill-height">
                    Book stat
                </v-col>

                <v-col md="4" cols="12" class="debug-border fill-height">
                </v-col>

                <v-col cols="4" v-show="$vuetify.breakpoint.mdAndUp" class="fill-height">
                    Background stuff
                </v-col>
            </v-row>
            <v-row class="height-50">
                <div v-if="$vuetify.breakpoint.mdAndUp" style="width: 100%">
                    <v-col cols="12" class="px-0 pb-0 fill-height">
                        <v-card class="custom-card-border-tl rounded-tr-0 fill-height custom-bg-color-gray">
                            <div class="pl-10 pt-10">
                                <v-row>
                                    <v-col cols="4" offset="1" class="debug-border">
                                        <pie-chart :colors="['#b00', '#666']" :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col cols="4">
                                        <v-btn color="primary" elevation="1" x-large>
                                            EXPLORE
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                </div>

                <div v-else style="width: 100%">
                    <v-card class="fill-height custom-bg-color-gray">
                        <v-row>
                            <v-btn color="primary" elevation="1" x-large>
                                EXPLORE
                            </v-btn>
                        </v-row>
                        <v-row>
                            <pie-chart :colors="['#b00', '#666']" :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
                        </v-row>
                    </v-card>
                </div>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>

    export default {
        name: "Landing",

        data() {
            return {
                chartData: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green',],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
            }
        },

        methods: {
            fillData() {

            }
        }
    }
</script>

<style scoped>
    .debug-border {
        border: 1px solid black
    }
    .custom-bg-color-gray {
        background-color: #F2F5F8
    }

    .custom-bg-color-green {
        background-color: #58A975;
    }

    .height-50 {
        height: 50%;
    }

    .logo {
        background-image: url("/assets/logo/logo.png");
    }

    .custom-card-border-tl {
        border-radius: 54px 0 0 0;
    }
</style>
