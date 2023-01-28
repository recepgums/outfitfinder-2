<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="d-md-none d-sm-block container-md">
      <div class="row">
        <div class="col-12" v-for="(spot, i) in spots" :key="spot.id">
          <OverViewCard  :spot="spot"></OverViewCard>
        </div>
      </div>
    </div>

    <div class="d-none d-md-block ">
      <div class="row">
        <OverViewCard class="col-sm-4 col-4 my-1" v-for="(spot, i) in spots" :key="spot.id" :spot="spot"></OverViewCard>
      </div>
    </div>

    <div v-if="nextPageLoading" class="text-center mb-5" style="font-size: 1.3rem">
      {{loadingText}}
    </div>
  </div>
</template>

<script>
import OverViewCard from "../components/OverViewCard";

export default {
  components: {
    OverViewCard
  },
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
  name: 'IndexPage',
  data() {
    return {
      nextPageLink:this.$axios.defaults.baseURL + 'spot?page=2',
      nextPageLoading:false,
      loadingText:'Loading...'
    }
  },
  async asyncData({$axios}) {
    try {
      const resp = await $axios.get(`${$axios.defaults.baseURL}spot?page=1`)
      const spots = resp.data.data
      return {spots: spots}
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
   async getSpots (){
     this.nextPageLoading = true
      await this.$axios.get(this.nextPageLink)
        .then(resp => {
          resp.data.data.forEach(item => this.spots.push(item));
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
  }
}

</script>
<style>
@media only screen and (max-width: 600px) {
  .el-card {
    max-height: 420px;
    margin: 10px 0;
    /*background-color: green;*/
  }
}

@media screen and (min-width: 1130px) {
  .el-card {
    max-height: 450px;
    /*background-color: red;*/
  }
}

@media screen and (min-width: 1600px) {
  .el-card {
    /*background-color: blue;*/
    max-height: 500px;
  }
}
</style>
