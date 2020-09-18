<template>
    <div>
        <v-main class="fill-height">
            <v-container class="fill-height custom-bg-color-green py-0" fluid>
                <v-row class="justify-center align-center" style="height: 50vh">
                    <v-col col="4" v-show="$vuetify.breakpoint.mdAndUp" class="m-auto fill-height debug-border">
                        <v-row v-if="overview" class="white--text justify-center align-center debug-border fill-height">

                            <div class="d-flex flex-column" style="z-index: 2">
                                <p><span class="text-h1">{{overview['books']}}</span> <span class="text-h5">Books</span>
                                </p>
                                <p class="ml-12"><span class="text-h1">{{overview['authors']}}</span><span
                                    class="text-h5">Authors</span></p>
                                <p><span class="text-h1">{{overview['categories']}}</span> <span class="text-h5">Categories</span>
                                </p>
                            </div>
                            <span class="custom-bg-book d-none d-sm-none d-md-flex"></span>
                        </v-row>

                        <v-row v-else>
                            Loading..
                        </v-row>

                    </v-col>

                    <v-col md="4" cols="12">
                        <v-img src="https://i.imgur.com/QtNlFK7.png"/>
                    </v-col>

                    <v-col cols="4" v-show="$vuetify.breakpoint.mdAndUp" class="custom-bg-shelf fill-height" style="z-index: 1">
                        <v-row justify="center" align="center" class="white--text debug-border fill-height">
                            <v-col cols="2" offset="4">
                                <div class="fancy-button-border">
                                    <v-btn color="accent" elevation="1" x-large to="/login">
                                        EXPLORE
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!--            bottom section-->
                <v-row>
                    <div v-if="$vuetify.breakpoint.mdAndUp" style="width: 100%" class="height-50">
                        <v-card elevation="4" class="rounded-tl-xl mt-3 pt-6">
                            <v-card-text>
                                <v-row class="justify-center align-center">
                                    <v-col cols="5">
                                        <p class="text-h3 text-center">Shaheen Library</p>
                                        <div class="text-body-1 text-justify">
                                            <div>
                                                Shahin or Shaheen or Shaahiin or francicized Chahine (from the Persian:
                                                شاهين,
                                                Shāhīn) is a name of Persian origin, referring specifically to the
                                                Barbary
                                                falcon utilized in falconry. In Persian, Shahin literally means "like a
                                                king",
                                                "worthy of a king", "majestic" or "kingly".
                                            </div>

                                            <br>
                                            <div>
                                                The name SHAHEEN was the founder’s personal selection. Reading
                                                enlightens
                                                and liberates a man; like a falcon who takes off aiming for the high sky
                                                and
                                                then, once liberated floats under the bright sun with its wings
                                                widespread.
                                                A reader never exhausts learning, he continues throughout his life,
                                                tirelessly.
                                            </div>
                                            <br>
                                            <div class="subtitle-2 text-center font-italic font-weight-light">

                                                "Tu ShaheeN Hai Parwaaz Hai Kaam Tera <br>
                                                Tere Saamne Aasman Aur Bhee Hain" <br>
                                                -Allama Iqbal <br>

                                                <br>
                                                "You are the great Falcon, your passion is flight.<br>
                                                Look ahead, there are more skies to transcend"<br>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col offset="1" cols="5">
                                        <v-row class="justify-center align-center">
                                            <v-col cols="5">
                                                <div>
                                                    <p class="text-body-1 text-center"> Number of Books By Category</p>
                                                    <pie-chart :data="category"
                                                               :library="{legend: {display: false}}"></pie-chart>
                                                </div>

                                            </v-col>
                                            <v-col cols="5">
                                                <div>
                                                    <p class="text-body-1 text-center"> Number of Books by Language</p>
                                                    <pie-chart :data="language"
                                                               :library="{legend: {display: false}}"></pie-chart>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-divider class="py-6"/>
                                <v-row class="px-6">
                                    <v-col>
                                        <div>
                                            <div class="font-weight-bold text-h5">About Shaheen Library</div>
                                            <div class="text-body-1">
                                                Shaheen Library was first established in 1951.
                                                Starting from only a few books at that time, Shaheen
                                                Library now boasts over 6000 books and counting. Every
                                                book here is part of the founder’s personal collection
                                                and ranges from Politics, Science, History, Religion, Sufism,
                                                and more. Language is no barrier either. The library has books
                                                covering many languages including English, Bangla, Urdu, Farsi, and
                                                Arabic.
                                            </div>
                                        </div>
                                        <br>
                                        <div class="text-body-1">
                                            <div class="font-weight-bold text-h5">About the Founder</div>
                                            <div class="text-left">Ziaul Huq Qutubuddin</div>
                                            <div class="text-left ">Visiting Professor of Islamic Studies, South-East
                                                University, Dhaka
                                            </div>
                                            <br>
                                            The Founder of Shaheen Library, Ziaul Huq Qutubuddin,
                                            is one of the scholars on Islam, Quran and Sufism.
                                            He is the Son of Shamsul Ulama Maulana Safiullah (r),
                                            the great Saint of Kolkata, and brother of Fakhrul Mohaddesin Maulana
                                            Abdul Ghafoor (r). He joined the Pakistan Taxation Services in 1963 and
                                            retired as a Member (Taxation), National Board of Revenue, Government of
                                            Bangladesh. He was also a member of the Bangladesh Public Service
                                            Commission.
                                        </div>

                                        <br>

                                        <div class="text-body-1">
                                            To view lectures on the Quran and Sunnah by the founder and learn more of
                                            his teachings, please visit his Quran Study Circle at
                                            <a href="https://qquranstudycircle.org/">https://qquranstudycircle.org/ </a>
                                            or visit the Facebook page at
                                            <a href="https://www.facebook.com/QQURANSTUDYCIRCLE/">https://www.facebook.com/QQURANSTUDYCIRCLE/</a>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </div>

                    <div v-else style="width: 100%">
                        <v-card class="fill-height custom-bg-color-gray">
                            <v-row class="">
                                <v-btn color="primary" elevation="1" x-large class="mx-auto mt-4" to="/login">
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

                            <v-row class="px-6">
                                <v-col>
                                    <p class="text-h3 text-center">Shaheen Library</p>
                                    <div class="text-body-1 text-justify">
                                        <div>
                                            Shahin or Shaheen or Shaahiin or francicized Chahine (from the Persian:
                                            شاهين,
                                            Shāhīn) is a name of Persian origin, referring specifically to the
                                            Barbary
                                            falcon utilized in falconry. In Persian, Shahin literally means "like a
                                            king",
                                            "worthy of a king", "majestic" or "kingly".
                                        </div>

                                        <br>
                                        <div>
                                            The name SHAHEEN was the founder’s personal selection. Reading
                                            enlightens
                                            and liberates a man; like a falcon who takes off aiming for the high sky
                                            and
                                            then, once liberated floats under the bright sun with its wings
                                            widespread.
                                            A reader never exhausts learning, he continues throughout his life,
                                            tirelessly.
                                        </div>
                                        <br>
                                        <div class="subtitle-2 text-center font-italic font-weight-light">

                                            "Tu ShaheeN Hai Parwaaz Hai Kaam Tera <br>
                                            Tere Saamne Aasman Aur Bhee Hain" <br>
                                            -Allama Iqbal <br>

                                            <br>
                                            "You are the great Falcon, your passion is flight.<br>
                                            Look ahead, there are more skies to transcend"<br>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row class="px-6">
                                <v-col>
                                    <div>
                                        <div class="font-weight-bold text-h5">About Shaheen Library</div>
                                        <div class="text-body-1">
                                            Shaheen Library was first established in 1951.
                                            Starting from only a few books at that time, Shaheen
                                            Library now boasts over 6000 books and counting. Every
                                            book here is part of the founder’s personal collection
                                            and ranges from Politics, Science, History, Religion, Sufism,
                                            and more. Language is no barrier either. The library has books
                                            covering many languages including English, Bangla, Urdu, Farsi, and
                                            Arabic.
                                        </div>
                                    </div>
                                    <br>
                                    <div class="text-body-1">
                                        <div class="font-weight-bold text-h5">About the Founder</div>
                                        <div class="text-left">Ziaul Huq Qutubuddin</div>
                                        <div class="text-left ">Visiting Professor of Islamic Studies, South-East
                                            University, Dhaka
                                        </div>
                                        <br>
                                        The Founder of Shaheen Library, Ziaul Huq Qutubuddin,
                                        is one of the scholars on Islam, Quran and Sufism.
                                        He is the Son of Shamsul Ulama Maulana Safiullah (r),
                                        the great Saint of Kolkata, and brother of Fakhrul Mohaddesin Maulana
                                        Abdul Ghafoor (r). He joined the Pakistan Taxation Services in 1963 and
                                        retired as a Member (Taxation), National Board of Revenue, Government of
                                        Bangladesh. He was also a member of the Bangladesh Public Service
                                        Commission.
                                    </div>

                                    <br>

                                    <div class="text-body-1">
                                        To view lectures on the Quran and Sunnah by the founder and learn more of
                                        his teachings, please visit his Quran Study Circle at
                                        <a href="https://qquranstudycircle.org/">https://qquranstudycircle.org/ </a>
                                        or visit the Facebook page at
                                        <a href="https://www.facebook.com/QQURANSTUDYCIRCLE/">https://www.facebook.com/QQURANSTUDYCIRCLE/</a>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </div>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import http from "../http/axios";

    export default {
        name: "Landing",

        created() {
            this.fetchData().then(e => {
            });
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
                try {
                    let statResponse = await http.get('/api/stat');
                    this.overview = statResponse.data['stat']['overview'];
                    this.parseCategoryChart(statResponse.data['stat']['category_chart']);
                    this.parseLanguageChart(statResponse.data['stat']['language_chart']);
                    // this.language = statResponse.data['stat']['language_chart'];
                } catch (e) {
                    console.error(e);

                }
            },

            parseCategoryChart(data) {
                let values = [];
                data.forEach((e) => values.push(Object.values(e)));
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
        /*border: 1px solid black*/
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

    .custom-bg-book {
        width: 100%;
        height: 100%;
        opacity: 0.4;
        position: absolute;
        background-image: url("/assets/bg/book.svg");
        background-position: center;
        background-size: inherit;
    }

    .custom-bg-shelf {
        width: 100%;
        height: 100%;
        opacity: 1;
        position: inherit;
        background-image: url("/assets/bg/shelf.svg");
        background-position: left top;
        background-size: contain;

    }

    .custom-card-border-tl {
        border-radius: 54px 0 0 0;
    }

    .fancy-button-border {
        border: 25px outset rgba(91, 22, 134, 0.42);
        border-radius: 0px 40px 0px 40px;
    }
</style>
