<template>
  <div class="wrapper">
    <!-- v-if="list.length"  showSwiper 如果不加这个,swiper组件会以空数组加载swiper组件，然后ajax数据加载了再加载一次，这样会导致图片显示最后一张 -->
    <swiper :options="swiperOption" v-if="showSwiper" >
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// .wrapper >>> .swiper-pagination-bullet-active
// background :#fff
.wrapper {
  width: 100%;
  overflow: hidden;
  height: 2.34rem;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>

<style>
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
