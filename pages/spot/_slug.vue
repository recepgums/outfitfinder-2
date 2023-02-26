<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="d-block container-md">
      <DetailCard :spot="spot"></DetailCard>
    </div>
    <br>
    <h3>
      Similar spots
    </h3>
    <hr>
    <div class="d-block container">
      <div class="row">
        <OverViewCard class="col-sm-12 col-md-4 my-1" v-for="(spot, i) in relatedSpots" :key="spot.id" :spot="spot"></OverViewCard>
      </div>
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
      title: this.spot?.meta_title ?? this.spot?.title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.spot?.meta_description ?? this.spot?.description
        },

        { hid: 'og:title', property: 'og:title', content: this.spot?.meta_title ?? this.spot?.title },
        { hid: 'og:description', property: 'og:description', content: this.spot?.meta_description ?? this.spot.description  },
        { hid: 'og:url', property: 'og:url', content: 'https://closetfinder.com/'+this.$router.currentRoute?.fullPath  },
        { hid: 'og:image', property: 'og:image', content: this.spot?.images[0]},


        { hid: 'twitter:title', property: 'twitter:title', content: this.spot?.meta_title ?? this.spot?.title },
        { hid: 'twitter:description', property: 'twitter:description', content: this.spot?.meta_description ?? this.spot.description  },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://closetfinder.com/'+this.$router.currentRoute?.fullPath  },
        { hid: 'twitter:image', property: 'twitter:image', content: this.spot?.images[0]},
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
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
<style scoped>
h1 {
  font-family: Roboto, sans-serif;
}
</style>
