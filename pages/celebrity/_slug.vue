<template>
  <div class="container">
    <CelebrityCard class="text-center" :celebrity="celebrity"/>
    <div class="row" v-if="spots.length > 0">
      <OverViewCard class="col-sm-12 col-md-4 my-1" v-for="(spot, i) in spots" :key="spot.id" :spot="spot"></OverViewCard>
    </div>
    <div v-else>
      Spot not found for {{celebrity?.name}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'CelebrityDetail',
  async asyncData({$axios, params}) {
    const celebrity = await $axios.get(`${$axios.defaults.baseURL}celebrity/${params.slug}`).then(resp => resp.data.data)
    const spots = await $axios.get(`${$axios.defaults.baseURL}spot?celebrity_id=${celebrity.id}`).then(resp => resp.data.data)
    return {celebrity: celebrity,spots:spots}
  },

  head() {
    return {
      title: this.celebrity?.name + ' Outfits',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.celebrity.name + ' Clothes, Outfits & Make up | Closet Finder'
        },

        { hid: 'og:title', property: 'og:title', content: this.celebrity?.name, },
        { hid: 'og:description', property: 'og:description', content:  this.celebrity.name + ' Clothes, Outfits & Make up | Closet Finder'  },
        { hid: 'og:url', property: 'og:url', content: 'https://closetfinder.com/'+this.$router.currentRoute?.fullPath  },
        { hid: 'og:image', property: 'og:image', content: this.celebrity?.cover_image_link},

        { hid: 'twitter:title', property: 'twitter:title', content:this.celebrity?.name },
        { hid: 'twitter:description', property: 'twitter:description', content:  this.celebrity.name + ' Clothes, Outfits & Make up | Closet Finder'  },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://closetfinder.com/'+this.$router.currentRoute?.fullPath  },
        { hid: 'twitter:image', property: 'twitter:image', content: this.celebrity?.cover_image_link},
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
      ],
    }
  },

}
</script>
