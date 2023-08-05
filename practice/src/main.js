import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//VC中のJSにあるプロパティはmixinの内容より優先的に処理されました。
// 以下のはグローバルでプロパティを配置するんです。繰り返しのは出来ます。
//関数で配置できるのはcomponent、mixinなど
import {mixin} from "@/mixin";
Vue.mixin(mixin);
// Vue.component();
new Vue({
  render: h => h(App),
}).$mount('#app')
