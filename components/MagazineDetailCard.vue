<template>
  <div class="blog-post">
    <h1 class="text-left">{{magazine?.title}}</h1>
    <p class="text-muted text-right">Date : {{magazine?.published_at}}</p>
    <img :src="magazine?.cover_image_link"
         :alt="magazine?.title"
         data-src-placeholder="data:image/webp;base64,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"
         v-lazy-load>
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
