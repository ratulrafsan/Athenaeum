import Vue from 'vue';
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: "#58A975",
                secondary: "#319555",
                accent: "#009688",
                error: "#F44336",
                warning: "#cddc39",
                info: "#03a9f4",
                success: "#F2F5F8"
            }
        }
    }
}

export default new Vuetify(opts)
