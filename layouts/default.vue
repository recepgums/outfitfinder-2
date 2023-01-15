<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <NuxtLink class="navbar-brand" to="/">
        <h3 class="text-center">
          closet
          <span style="
            color: white;
            background-color: #f056a9ba;
            border-radius: 20px;
            padding: 5px">
              finder
            </span>
        </h3>
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/celebrity">Celebrities</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/category/outfits">Outfits</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/category/make-up">Make Up</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/category/nail">Nail</NuxtLink>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input v-model="searchKeywords" class="form-control mr-sm-2" type="search" placeholder="celebrity, dress name etc" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="searchClicked">Search</button>
        </form>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export  default {
  data(){
    return {
      searchKeywords:''
    }
  },
  methods:{
    searchClicked(){
      alert(this.searchKeywords)
    }
  }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-display: swap!important;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-y: auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.nuxt-link-exact-active{
  color: #f056a9ba!important;
  font-weight: bold;
}
</style>
