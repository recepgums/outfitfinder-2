<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="container ">
      <div class="row">
        <MagazineCard class="col-sm-12 col-md-3 my-1" v-for="(magazine, i) in blogs" :key="magazine.id" :magazine="magazine"></MagazineCard>
      </div>
    </div>

    <div v-if="nextPageLoading" class="text-center mb-5" style="font-size: 1.3rem">
      {{loadingText}}
    </div>
  </div>
</template>

<script>


export default {
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
      nextPageLink:this.$axios.defaults.baseURL + 'blog?page=2',
      nextPageLoading:false,
      loadingText:'Loading...'
    }
  },
  async asyncData({$axios}) {
    try {
      const resp = await $axios.get(`${$axios.defaults.baseURL}blog?page=1`)
      const blogs = resp.data.data
      return {blogs: blogs}
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
   async getBlogs (){
     this.nextPageLoading = true
      await this.$axios.get(this.nextPageLink)
        .then(resp => {
          resp.data.data.forEach(item => this.blogs.push(item));
          if (!resp.data.links.next){
            this.loadingText = 'Looks like you have seen all magazine'
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
        await this.getBlogs()
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
