// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import './assets/css/style.css';
import './assets/css/media.css';
import './assets/iconfont/iconfont.css';
import i18n from './i18n/i18n'
import VueClipboard from 'vue-clipboard2'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
