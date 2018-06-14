<template>
  <div class="infinite-scroll">
    <slot></slot>
    <p ref="infinite-bottom" style="height: 0;"></p>
  </div>
</template>

<script>
  export default {
    name: 'infinite-scroll',
    props: {
      loadMore: {
        type: Function,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      config: {
        type: Object,
        default: {
          root: null,
          rootMargin: '0px',
          threshold: [Number.MIN_VALUE]
        }
      }
    },

    data() {
      return {
        observer: null,
      }
    },
    mounted() {
      this.initIntersectionObserver(this.$refs['infinite-bottom'])
    },
    methods: {
      initIntersectionObserver(el) {
        this.observer = new IntersectionObserver((entries, observer) => {
          entries.map(entry => {

            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              if (!this.disabled && this.loadMore) {
                this.loadMore(entry.target)
              }
            }
          })
        }, this.config)
        this.observer.observe(el)
      }
    }
  }
</script>
