
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { affix } from 'vue-beauty';
import {
  replaceVueBeautyComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(affix); // 加垫片
// 替换组件前缀
replaceVueBeautyComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.globalName, NewCtor);

export default NewCtor;
