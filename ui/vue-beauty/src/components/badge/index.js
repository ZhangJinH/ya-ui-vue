
/**
 * Component proxy
 * by 13
 */
import { badge } from 'vue-beauty';
import {
  mapComponent
} from 'deps/utils';
import wrap from './wrap';

let NewCtor = wrap(badge); // 加垫片
// 加垫片注册
NewCtor = mapComponent({
  Ctor: NewCtor,
  libName: 'vue-beauty'
});

export default NewCtor;
