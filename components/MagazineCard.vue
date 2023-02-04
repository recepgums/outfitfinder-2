<template>
  <NuxtLink class="card px-0" :to="'/magazine/'+magazine?.slug">
    <img :src="magazine?.cover_image_link" :alt="magazine?.title">
    <div class="card-content">
      <h2>{{ magazine?.title }}</h2>
      <p style="text-decoration: none;" v-html="magazine?.description.substring(0,150)" class="py-0"/>
    </div>
  </NuxtLink>

</template>

<script>
export default {
  name: 'MagazineCard',
  props: ['magazine'],
}
</script>

<style>
.card {
  /*width: 300px;*/
  overflow: hidden;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card-content {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0;
}

.card h2 {
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}

.card p {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
</style>
