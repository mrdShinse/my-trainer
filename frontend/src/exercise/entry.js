import Vue from 'vue';
import Vuetify from 'vuetify'

Vue.use(Vuetify)
window.eventHub = new Vue()

window.onload = function() {
  window.app = new Vue({
    el: '#exercise-view',
    components: {
      app: require('./components/App.vue')
    }
  });
}
