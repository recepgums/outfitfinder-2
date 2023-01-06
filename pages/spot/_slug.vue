<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="mx-auto m-2" >
      <div ref="swiper" class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <DetailCard :spot="spot"></DetailCard>
          </div>
          <div class="swiper-slide"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailCard from "../../components/DetailCard";

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SpotDetail',
  async asyncData({$axios,params}){
    const spot = await $axios.get(`${$axios.defaults.baseURL}spot/${params.slug}`).then(resp =>resp.data.data)
    console.log(spot)
    return {spot:spot}
  },
  data() {
    return {
      content: '',
      spots:[]
    }
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView:'1.5',
      on: {
        slideChange: (swiper) => {
          let nextSpot = this.spots[Math.floor(Math.random()*this.spots.length)];
          while (this.$router.currentRoute.fullPath === nextSpot){
            nextSpot = this.spots[Math.floor(Math.random()*this.spots.length)];
            console.log(this.$router.currentRoute.fullPath)
          }
          this.$router.push(`/spot/${nextSpot.slug}`)
        },
      },
    })
    this.$axios.get(`${this.$axios.defaults.baseURL}spot`).then(resp =>{
      this.spots = resp.data.data
    })
  },
  components: {
    DetailCard
  },
}
</script>
<style>
h1 {
  font-family: Roboto, sans-serif;
}
</style>
