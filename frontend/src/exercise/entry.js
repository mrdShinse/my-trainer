import Vue from 'vue';
window.eventHub = new Vue()

window.onload = function() {
  window.app = new Vue({
    el: '#exercise-view',
    components: {
      app: require('./components/App.vue')
    }
  });
}
