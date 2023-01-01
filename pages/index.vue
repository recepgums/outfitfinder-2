<!-- Please remove this file from your project -->
<template class="bg-gray">
  <div>
    <div class="d-md-none d-sm-block container">
      <div class="row">
        <div class="col-sm-4" v-for="(spot, i) in spots" :key="spot.id">
          <OverViewCard :spot="spot"></OverViewCard>
        </div>
      </div>
    </div>

    <div class="row d-none d-md-flex">
      <div class="col-sm-4 mt-2" v-for="(spot, i) in spots" :key="spot.id">
        <OverViewCard :spot="spot"></OverViewCard>
      </div>
    </div>
  </div>
</template>

<script>
import OverViewCard from "../components/OverViewCard";

export default {
  head() {
    return {
      title: 'Closet Finder',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          content: `Find the celebrities outfits. ${this.spots}`
        }
      ],
    }
  },
/*  head: {
    title: 'Closet Finder',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: `Find the celebrities outfits.`
      }
    ],
  },*/
  components: {
    OverViewCard
  },

  name: 'IndexPage',
  data() {
    return {
      content: '',
    }
  },
  async asyncData({$axios}) {
    try {
      const spots = await $axios.get(`${$axios.defaults.baseURL}spot`).then(resp => resp.data.data)
      return {spots}
    } catch (error) {
      console.log(error)
    }
  },
}

</script>
