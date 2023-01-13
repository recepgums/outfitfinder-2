<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="d-md-none d-sm-block container-md">
      <div class="row">
        <div class="col-12" v-for="(spot, i) in spots" :key="spot.id">
          <OverViewCard :spot="spot"></OverViewCard>
        </div>
      </div>
    </div>

    <div class="d-none d-md-block ">
      <div class="row">
        <OverViewCard class="col-sm-4 col-4 my-1" v-for="(spot, i) in spots" :key="spot.id" :spot="spot"></OverViewCard>
      </div>
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
      content: '',
    }
  },
  async asyncData({$axios}) {
    try {
      const spots = await $axios.get(`${$axios.defaults.baseURL}spot`).then(resp => resp.data.data)
      return {spots: spots}
    } catch (error) {
      console.log(error)
    }
  },
}

</script>
<style scoped>
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
