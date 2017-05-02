const Vue = require('vue')
window.eventHub = new Vue()

window.onload = function() {
  window.app = new Vue({
    el: '#dashboard',
    components: {
      app: require('./components/App.vue')
    }
  });
}
