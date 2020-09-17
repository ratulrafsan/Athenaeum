<template>
    <v-main class="fill-height">
        <v-container class="fill-height custom-bg-color-green py-0" fluid>
            <v-row :class="{'height-50' : $vuetify.breakpoint.mdAndUp}" class="justify-center align-center">
                <v-col col="4" v-show="$vuetify.breakpoint.mdAndUp" class="m-auto">
                    <v-row v-if="overview" class="white--text justify-center align-center">
                        <div class="d-flex flex-column">
                            <p><span class="text-h2">{{overview['books']}}</span> Books</p>
                            <p class="ml-12"><span class="text-h2">{{overview['authors']}}</span> Authors</p>
                            <p><span class="text-h2">{{overview['categories']}}</span>  Categories</p>
                        </div>
                    </v-row>
                    <v-row v-else>
                        Loading..
                    </v-row>
                </v-col>

                <v-col md="4" cols="12">
                    <v-img src="https://i.imgur.com/QtNlFK7.png"/>
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
                                <v-row class="justify-center align-center">
                                    <v-col cols="4" offset="1">
                                        <v-row>
                                            <p class="text-body-1 mx-auto"> Number of Books By Category</p>
                                            <pie-chart :data="category" :library="{legend: {display: false}}"></pie-chart>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-row>
                                            <p class="text-body-1 mx-auto"> Number of Books by Language</p>
                                            <pie-chart :data="language" :library="{legend: {display: false}}"></pie-chart>
                                        </v-row>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col cols="3">
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
                        <v-row class="">
                            <v-btn color="primary" elevation="1" x-large class="mx-auto mt-4">
                                EXPLORE
                            </v-btn>
                        </v-row>
                        <v-row class="my-4">
                            <p class="text-body-1 mx-auto"> Number of Books By Category</p>
                            <pie-chart :data="category" :library="{legend: {display: false}}"></pie-chart>
                        </v-row>
                            <v-row class="my-4">
                                <p class="text-body-1 mx-auto"> Number of Books by Language</p>
                                <pie-chart :data="language" :library="{legend: {display: false}}"></pie-chart>
                            </v-row>
                        <v-row class="mx-auto pa-2 text-justify">
                            <p class="text-h4 mx-auto">About</p>
                            <p class="text-body-1">
                                Shahin or Shaheen or Shaahiin or francicized Chahine (from the Persian: شاهين, Shāhīn) is a name of Persian origin, referring specifically to the Barbary falcon utilized in falconry. In Persian, Shahin literally means "like a king", "worthy of a king", "majestic" or "kingly".
                            </p>
                        </v-row>
                    </v-card>
                </div>
            </v-row>
        </v-container>
        <v-container>
            <v-row class="mx-auto pa-2 text-justify">
                <p class="text-h4 mx-auto">About</p>
                <div class="text-body-1">
                    <div>
                        Shahin or Shaheen or Shaahiin or francicized Chahine (from the Persian: شاهين,
                        Shāhīn) is a name of Persian origin, referring specifically to the Barbary
                        falcon utilized in falconry. In Persian, Shahin literally means "like a king",
                        "worthy of a king", "majestic" or "kingly".
                    </div>

                    <br>
                    <div>
                        The name SHAHEEN was the founder’s personal selection. Reading enlightens
                        and liberates a man; like a falcon who takes off aiming for the high sky and
                        then, once liberated floats under the bright sun with its wings widespread.
                        A reader never exhausts learning, he continues throughout his life,
                        tirelessly.
                    </div>
                    <br>
                    <div class="subtitle-2 text-center">

                        "Tu ShaheeN Hai Parwaaz Hai Kaam Tera <br>
                        Tere Saamne Aasman Aur Bhee Hain" <br>
                        -Allama Iqbal <br>

                        <br>
                        "You are the great Falcon, your passion is flight.<br>
                        Look ahead, there are more skies to transcend"<br>
                    </div>
                    <br>
                    <div>
                        <div class="font-weight-bold">About Shaheen Library</div>
                        Shaheen Library was first established in 1951.
                        Starting from only a few books at that time, Shaheen
                        Library now boasts over 6000 books and counting. Every
                        book here is part of the founder’s personal collection
                        and ranges from Politics, Science, History, Religion, Sufism,
                        and more. Language is no barrier either. The library has books
                        covering many languages including English, Bangla, Urdu, Farsi, and Arabic.
                    </div>
                    <br>
                    <div>
                        <div class="font-weight-bold">About the Founder</div>
                        <div class="text-left">Ziaul Huq Qutubuddin</div>
                        <div class="text-left">Visiting Professor of Islamic Studies, South-East University, Dhaka</div>
                        <br>
                        The Founder of Shaheen Library, Ziaul Huq Qutubuddin,
                        is one of the scholars on Islam, Quran and Sufism.
                        He is the Son of Shamsul Ulama Maulana Safiullah (r),
                        the great Saint of Kolkata, and brother of Fakhrul Mohaddesin Maulana
                        Abdul Ghafoor (r). He joined the Pakistan Taxation Services in 1963 and
                        retired as a Member (Taxation), National Board of Revenue, Government of
                        Bangladesh. He was also a member of the Bangladesh Public Service Commission.
                    </div>

                    <br>

                    <div>
                        To view lectures on the Quran and Sunnah by the founder and learn more of
                        his teachings, please visit his Quran Study Circle at
                        <a href="https://qquranstudycircle.org/">https://qquranstudycircle.org/ </a>
                        or visit the Facebook page at
                        <a href="https://www.facebook.com/QQURANSTUDYCIRCLE/">https://www.facebook.com/QQURANSTUDYCIRCLE/</a>
                    </div>
                </div>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import http from "../http/axios";
    export default {
        name: "Landing",

        created() {
            this.fetchData().then(e=>{});
        },
        data() {
            return {
                overview: undefined,
                category: [],
                language: undefined
            }
        },

        methods: {
            fillData() {

            },

            async fetchData() {
                try{
                    let statResponse = await http.get('/api/stat');
                    console.log(statResponse);
                    this.overview = statResponse.data['stat']['overview'];
                    this.parseCategoryChart(statResponse.data['stat']['category_chart']);
                    this.parseLanguageChart(statResponse.data['stat']['language_chart']);
                    // this.language = statResponse.data['stat']['language_chart'];
                }catch (e) {
                    console.error(e);

                }
            },

            parseCategoryChart(data) {
                let values = [];
                data.forEach( (e) => values.push(Object.values(e)));
                this.category = values.slice(0, 30);
            },

            parseLanguageChart(data) {
                let values = [];
                data.forEach(e => values.push(Object.values(e)));
                this.language = values.slice(0, 10);
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
