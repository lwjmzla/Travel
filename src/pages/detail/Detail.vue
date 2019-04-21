<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      firstLoad: true
    }
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
    setTimeout(() => {
      this.firstLoad = false
    }, 10)
  },
  activated () {
    if (!this.firstLoad) {
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
