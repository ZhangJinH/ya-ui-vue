/**
 * 示例页
 */
import 'babel-polyfill';
import Vue from 'vue';
import elementUi from './element-ui/index';
// import utils from 'ya-ui-vue/deps/utils';
// console.log(elementUi);
// import test from './test/index';

// const Vue = window.Vue;
const widgets = [
  elementUi(),
  // test()
];
const App = Vue.extend({
  render(h) {
    return h('div', {}, widgets.map((config) => {
      return h(Vue.extend(config));
    }));
  }
});

new App().$mount('#app');