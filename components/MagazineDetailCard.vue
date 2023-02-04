<template>
  <div class="blog-post">
    <h1 class="text-left">{{magazine?.title}}</h1>
    <p class="text-muted text-right">Date : {{magazine?.published_at}}</p>
    <img :src="magazine?.cover_image_link" alt="Blog Image">
    <p v-html="magazine?.description" />

    <div v-if="magazine?.spot">
      <h4>
        Related Spot
      </h4>
      <OverViewCard class="col-sm-12 col-md-8" :spot="magazine.spot"/>
    </div>

  </div>

</template>
<script>
export default {
  name:'MagazineDetailCard',
  props:['magazine'],
  data(){
    return {

    }
  }
}
</script>
<style>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  line-height: 1.5;
  /*font-family: 'Open Sans', sans-serif;*/
}

.blog-post h1 {
  font-size: 36px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
}

.blog-post p {
  font-size: 16px;
  margin-bottom: 20px;
}

.blog-post img {
  width: 100%;
  height: auto;
  margin-bottom: 40px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
