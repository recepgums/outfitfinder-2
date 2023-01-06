<template>
  <div class="container">
    <CelebrityCard :celebrity="celebrity"/>
    <div class="row" v-if="spots.length > 0">
      <OverViewCard class="col-sm-4 col-4 my-1" v-for="(spot, i) in spots" :key="spot.id" :spot="spot"></OverViewCard>
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
    console.log(celebrity.id)
    const spots = await $axios.get(`${$axios.defaults.baseURL}spot?celebrity_id=${celebrity.id}`).then(resp => resp.data.data)
    return {celebrity: celebrity,spots:spots}
  },

  head() {
    return {
      title: this.celebrity?.name,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: this.celebrity.name + ' spots'
        }
      ],
    }
  },

}
</script>
