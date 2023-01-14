<template>
  <div>
    Category {{ spot }}
  </div>
</template>

<script>

export default {
  name: "CategoryDetail",
  async asyncData({$axios, params}) {
    const spot = params
    const relatedSpots = await $axios.get(`${$axios.defaults.baseURL}related/spot?category=${params.slug}`)
      .then(resp => resp.data.data)
    return {spot: spot, relatedSpots: relatedSpots}
  },
}
</script>
