<template>
 <div class="icons">
    <swiper  :options="swiperOption">
      <swiper-slide v-for="(pageitems,index) in pages" :key="index">
        <div class="icon" v-for="item in pageitems" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
 </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // 这个的难点在于：传了一系列的数据，一页最多8个，然后需要分组 然后生成格式为  [ [xxx],[xxx]... ]的数据
    pages() {
      let pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons {
  width: 100%;
  height: 3.75rem;
  overflow: hidden;
  margin-top : 0.1rem;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        display: block;
        height: 1rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
    }
  }
}
</style>

<style>
.swiper-container {
  height: 100%;
}
</style>
