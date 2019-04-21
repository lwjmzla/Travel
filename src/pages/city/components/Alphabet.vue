<template>
  <ul class="list" ref="alphaUl">
    <li class="item" v-for="item in letters" :key="item" :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      touchStatus: false,
      startY: 0,
      ulToTop: 0,
      timer: null
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
    this.ulToTop = this.$refs.alphaUl.offsetTop
    // function scroll() {
    //   console.log(1)
    // }
    // function throttle(fun, delay, time) {
    //   var timeout
    //   var startTime = new Date()
    //   return function(ev) {
    //     var context = this
    //     var args = arguments // 直接ev也可以的
    //     var curTime = new Date()
    //     clearTimeout(timeout)
    //     // 如果达到了规定的触发时间间隔，触发 handler
    //     if (curTime - startTime >= time) {
    //       fun.apply(context, args)
    //       startTime = curTime
    //       // 没达到触发间隔，重新设定定时器
    //     } else {
    //       // 每滚动一次会清上次的定时器，和启动本次定时器
    //       // 这里相当于实现了滚动到停止的时候，也会执行一次fun方法
    //       timeout = setTimeout(fun, delay)
    //     }
    //   }
    // }
    // window.onscroll = throttle(scroll, 16, 1000)
  },
  components: {},
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // if (this.timer) {
        //   clearTimeout(this.timer)
        // }
        // this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - this.ulToTop - this.startY // 相当于是基于开始点 长度多少
          const index = Math.floor(touchY / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        // }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
