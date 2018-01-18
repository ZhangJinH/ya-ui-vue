
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import { Tree } from 'iview';
import {
  replaceIviewComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(Tree); // 加垫片
// 替换组件前缀
replaceIviewComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.globalName, NewCtor);

export default NewCtor;
