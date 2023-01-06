<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="mx-auto m-2">
      <DetailCard :spot="spot"></DetailCard>
    </div>
    <br>
    <h2>
      Similar spots
    </h2>
    <hr>
    <div class="row">
      <client-only>
        <div v-for="spot in relatedSpots" :key="spot.id" class="col-md-4 my-1">
          <OverViewCard :spot="spot"/>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import DetailCard from "../../components/DetailCard";

import Swiper, {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SpotDetail',
  async asyncData({$axios, params}) {
    const spot = await $axios.get(`${$axios.defaults.baseURL}spot/${params.slug}`).then(resp => resp.data.data)
    const relatedSpots = await $axios.get(`${$axios.defaults.baseURL}related/spot/${params.slug}`).then(resp => resp.data.data)
    return {spot: spot, relatedSpots: relatedSpots}
  },

  head() {
    return {
      title: this.spot.meta_title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.spot.metadescription
        }
      ],
    }
  },
  data() {
    return {
      content: '',
      spots: []
    }
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: '1.5',
      on: {
        slideChange: (swiper) => {
          let nextSpot = this.spots[Math.floor(Math.random() * this.spots.length)];
          while (this.$router.currentRoute.fullPath === nextSpot) {
            nextSpot = this.spots[Math.floor(Math.random() * this.spots.length)];
            console.log(this.$router.currentRoute.fullPath)
          }
          this.$router.push(`/spot/${nextSpot.slug}`)
        },
      },
    })
    this.$axios.get(`${this.$axios.defaults.baseURL}spot`).then(resp => {
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
