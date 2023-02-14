<!-- Please remove this file from your project -->
<template>
  <div class="container">
    <div class="row px-2">
      <CelebrityCard2 class="col-6 col-md-4" :celebrity="celebrity"
                     v-for="celebrity in celebrities"
                     :key="celebrity.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      content: '',
    }
  },
  async asyncData({$axios}) {
    try {
      const celebrities = await $axios.get(`${$axios.defaults.baseURL}celebrity?has_spot=1`).then(resp => resp.data.data)
      return {celebrities: celebrities}
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
