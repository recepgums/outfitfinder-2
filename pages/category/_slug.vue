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
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {name: 'title', content: 'Closet Finder |  Identifying Celebrity Outfits'},
    {
      hid: 'description',
      name: 'description',
      content: 'Closet Finder identifies the outfits and make up products worn by celebrities and shows you where you can buy their clothes'
    }
  ],
  data(){
    return{
      nextPageLink:this.$axios.defaults.baseURL + 'spot?category='+ this.$route.params.slug+'&page=2',
      nextPageLoading:false,
      loadingText:'Loading...'
    }
  },

  async asyncData({$axios, params}) {
    const relatedSpots = await $axios.get(`${$axios.defaults.baseURL}spot?category=${params.slug}&page=1`,{
      headers:{"Accept":'application/json'}
    })
      .then(resp => {
        return resp.data.data
      })
    return {relatedSpots}
  },
  methods:{
    async getSpots (){
      this.nextPageLoading = true
      await this.$axios.get(this.nextPageLink)
        .then(resp => {
          resp.data.data.forEach(item => this.relatedSpots.push(item));
          if (!resp.data.links.next){
            this.loadingText = 'Looks like you have seen all spots'
          }

          this.nextPageLink = resp.data.links.next
          this.nextPageLoading = false
        })
    }
  },
  mounted() {
    window.onscroll = async () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !this.nextPageLoading
      ) {
        await this.getSpots()
      }
    }
  },
}
</script>
