<template>
  <div>
    <NuxtLink
      style="color:#000;"  class="circle text-center" :to="`celebrity/${celebrity?.slug}`">
      <img height="140" width="140"
           :src="celebrity?.cover_image_link" :alt="celebrity.name">
      <h2 style="color: deeppink;font-size: 1rem;text-align: center">{{celebrity?.name}}</h2>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props:['celebrity']
}
</script>
<style>

.circle {
  line-height: 0; /* remove line-height */
  display: inline-block; /* circle wraps image */
  margin: 5px;
  border: 4px solid rgba(200, 200, 200, 0.4);
  border-radius: 50%; /* relative value */
  /*box-shadow: 0px 0px 5px rgba(0,0,0,0.4);*/
  transition: linear 0.25s;
  height: 150px;
  width: 150px;
}
.circle img {
  border-radius: 50%; /* relative value for
				   adjustable image size */
}
.circle:hover {
  transition: ease-out 0.2s;
  border: 4px solid rgba(0, 0, 0, 0.2);
  -webkit-transition: ease-out 0.2s;
}
a.circle {
  color: transparent;
} /* IE fix: removes blue border */

</style>
