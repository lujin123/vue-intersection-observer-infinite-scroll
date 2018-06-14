/**
 * 一个非常简单的无限加载组件的封装
 *
 * 使用了浏览器的新特性`IntersectionObserver`，当然兼容性不怎么好，^_^，但是简单啊，
 * 弄一个`polyfill`其实还行，大部分的浏览器都可以运行的
 */

import InfiniteScroll from './InfiniteScroll.vue'

export default {
  install(Vue) {
    Vue.component(InfiniteScroll.name, InfiniteScroll)
  }
}
