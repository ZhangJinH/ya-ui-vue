
/**
 * Button proxy
 * by 13
 */
import Vue from 'vue';
import Ctor from 'element-ui/lib/header';
import {
  replaceElementUiComponentPrefix
} from 'deps/utils';
import shim from './shim';

const NewCtor = shim(Ctor); // 加垫片
// 替换组件前缀
replaceElementUiComponentPrefix(NewCtor);
// 自动注册组件
Vue.component(NewCtor.globalName, NewCtor);

export default NewCtor;
