<template>
  <div>
   <h1 style="color: #f056a9ba">
     {{ category.name }}
   </h1>

    <div class="row">
      <OverViewCard class="col-sm-4 col-4 my-1" v-for="(spot, i) in relatedSpots" :key="spot.id" :spot="spot"></OverViewCard>
    </div>
  </div>
</template>

<script>

export default {
  name: "CategoryDetail",
  async asyncData({$axios, params}) {
    const category = params
    const relatedSpots = await $axios.get(`${$axios.defaults.baseURL}related/spot?category=${params.slug}`)
      .then(resp => resp.data.data)
    return {category: category, relatedSpots: relatedSpots}
  },
}
</script>
