<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180614_CPM_WAP_DE10841.jpg'
        },
        {
          id: '002',
          imgUrl: 'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180614_CPM_WAP_DE10841.jpg'
        }
      ]
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
// .wrapper >>> .swiper-pagination-bullet-active
// background :#fff
.wrapper {
  width: 100%;
  overflow: hidden;
  height: 1.84rem;
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
