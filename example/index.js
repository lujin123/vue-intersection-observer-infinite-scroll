import VueComp from '../src'
// 浏览器识别不了import，所以运行不了...
Vue.use(VueComp)
new Vue({
  el: document.querySelector('#app'),
  data() {
    return {
      items: this.getData(30),
      disabled: false,
      config: {
        root: null,
        rootMargin: '500px 0px',
        threshold: [Number.MIN_VALUE]
      }
    }
  },
  methods: {
    getData(n) {
      let data = []
      for (let i = 0; i < n; i++) {
        data.push(i)
      }
      return data
    },
    loadMore(el) {
      this.disabled = true
      setTimeout(() => {
        console.log('load data success...')
        this.items = this.items.concat(this.getData(20))
        this.disabled = false
      }, 300)
    }
  }
})
