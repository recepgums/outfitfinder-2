<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <li class="nav-item active">
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
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
  Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 100px;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: #00c58e;
}

}
</style>
