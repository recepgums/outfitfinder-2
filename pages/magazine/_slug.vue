<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="d-block container-fluid">
      <MagazineDetailCard :magazine="magazine"></MagazineDetailCard>
    </div>
    <br>
    <div v-if="relatedMagazines?.length > 0">
      <h2 class="blog-post">
        Similar magazines
      </h2>
      <hr>
      <div class="d-block container blog-post">
        <div class="row">
          <MagazineCard class="col-sm-12 col-md-4 my-1" v-for="(magazine, i) in relatedMagazines" :key="magazine.id" :magazine="magazine"></MagazineCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailCard from "../../components/DetailCard";

import Swiper, {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'magazineDetail',
  async asyncData({$axios, params}) {
    const magazine = await $axios.get(`${$axios.defaults.baseURL}blog/${params.slug}`).then(resp => resp.data.data)
    const relatedMagazines = await $axios.get(`${$axios.defaults.baseURL}related/blog/${params.slug}`).then(resp => resp.data.data)
    return {magazine: magazine, relatedMagazines: relatedMagazines}
  },

  head() {
    return {
      title: this.magazine?.meta_title ?? this.magazine?.title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.magazine?.meta_description ?? this.magazine?.description
        },

        { hid: 'og:title', property: 'og:title', content: this.magazine?.meta_title ?? this.magazine?.title },
        { hid: 'og:description', property: 'og:description', content: this.magazine?.meta_description ?? this.magazine.description  },
        { hid: 'og:url', property: 'og:url', content: 'https://closetfinder.com/'+this.$router.currentRoute?.fullPath  },
        { hid: 'og:image', property: 'og:image', content: this.magazine?.images[0]},


        { hid: 'twitter:title', property: 'twitter:title', content: this.magazine?.meta_title ?? this.magazine?.title },
        { hid: 'twitter:description', property: 'twitter:description', content: this.magazine?.meta_description ?? this.magazine.description  },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://closetfinder.com/'+this.$router.currentRoute?.fullPath  },
        { hid: 'twitter:image', property: 'twitter:image', content: this.magazine?.images[0]},
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
      ],
    }
  },
  data() {
    return {
      content: '',
      magazines: []
    }
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: '1.5',
      on: {
        slideChange: (swiper) => {
          let nextmagazine = this.magazines[Math.floor(Math.random() * this.magazines.length)];
          while (this.$router.currentRoute.fullPath === nextmagazine) {
            nextmagazine = this.magazines[Math.floor(Math.random() * this.magazines.length)];
            console.log(this.$router.currentRoute.fullPath)
          }
          this.$router.push(`/magazine/${nextmagazine.slug}`)
        },
      },
    })
    this.$axios.get(`${this.$axios.defaults.baseURL}magazine`).then(resp => {
      this.magazines = resp.data.data
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
