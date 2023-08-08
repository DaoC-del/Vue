import Vue from 'vue'
import App from './App.vue'
import plugins from "@/plugins";

Vue.config.productionTip = false

//プラグインを利用すること,構築する際に、
Vue.use(plugins)

// Vue.component();
new Vue({
  render: h => h(App),
}).$mount('#app')
