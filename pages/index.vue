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
      loading...
    </div>
  </div>
</template>

<script>
import OverViewCard from "../components/OverViewCard";

export default {
  components: {
    OverViewCard
  },

  name: 'IndexPage',
  data() {
    return {
      nextPageLink:this.$axios.defaults.baseURL + 'spot?page=2',
      nextPageLoading:false
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
    handleScroll () {
      let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        if (this.nextPageLink){
          this.nextPageLoading = true
          this.getSpots();
        }
      }
    },
   async getSpots (){
      await this.$axios.get(this.nextPageLink)
        .then(resp => {
          resp.data.data.forEach(item => this.spots.push(item));
          this.nextPageLink = resp.data.links.next
          this.nextPageLoading = false
        })
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
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
