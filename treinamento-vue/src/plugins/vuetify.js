import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont: 'mdi',
    },
    theme: { // Aplicando Temas
        themes: {
          light: {
            primary: colors.purple.darken3,
            secondary: colors.blue.lighten1,
            //accent: colors.indigo.base, // #3F51B5
          },
        },
      },
});
