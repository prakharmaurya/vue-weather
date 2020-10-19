import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#14274e", // #E53935
        secondary: "#394867", // #FFCDD2
        accent: "#9ba4b4",
        text: "#f1f6f9",
        darkText: "#463333",
      },
    },
  },
});
