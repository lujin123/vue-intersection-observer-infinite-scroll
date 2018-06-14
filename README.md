# vue-intersection-observer-infinite-scroll

A infinite scroll with intersection observer

一个使用了`IntersectionObserver`封装的无限加载`Vue`组件，参考了下饿了么的`vue-infinite-scroll`的参数，O(∩_∩)O 哈哈~

这个东西用`IntersectionObserver`实现实在太简单啦，我觉得性能应该会比监听滚动好多了，但是兼容性不好，`safari`是不支持的，但是通过一个`polyfill`，就可以好很多了...
