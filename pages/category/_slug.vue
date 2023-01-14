<template>
  <div>
   <h1 style="color: #f056a9ba">
   </h1>
    <div class="row">
      <OverViewCard class="col-sm-12 col-md-4 my-1" v-for="(spot, i) in relatedSpots" :key="spot.id" :spot="spot"></OverViewCard>
    </div>
  </div>
</template>

<script>

export default {
  name: "CategoryDetail",
  async asyncData({$axios, params}) {
    console.log(params)
    const relatedSpots = await $axios.get(`${$axios.defaults.baseURL}spot?category=${params.slug}`,{
      headers:{"Accept":'application/json'}
    })
      .then(resp => {
        return resp.data.data
      })
    return {relatedSpots}
  },
}
</script>
