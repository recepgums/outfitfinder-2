<template>
  <div class="container-md">
    <nav class="navbar navbar-expand-lg navbar-light">
      <NuxtLink class="navbar-brand" to="/">
        <h3 class="text-center">
          closet
          <span style="
            color: white;
            background-color: deeppink;
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
            <NuxtLink class="nav-link" to="/feed">Feed</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/celebrity">Celebrities</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NuxtLink class="dropdown-item" to="/category/outfits">Outfits</NuxtLink>
              <NuxtLink class="dropdown-item" to="/category/make-up">Make Up</NuxtLink>
              <NuxtLink class="dropdown-item" to="/category/hair">Hair</NuxtLink>
            </div>
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
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-y: auto
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
</style>
