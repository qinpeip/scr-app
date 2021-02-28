import Vue from 'vue';
import App from './views/App.vue';
new Vue({
  render: h=>h(App)
}).$mount('#app');


window.addEventListener('online', () => {
  console.log('trigger');
  // this.isOnline = window.navigator.onLine;
});
window.addEventListener('offline', () => {
  console.log('trigger');
  // this.isOnline = window.navigator.onLine;
});