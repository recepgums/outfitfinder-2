<template>
  <NuxtLink class="card px-0 nuxt-link-excluded" :to="'/magazine/'+magazine?.slug">
    <img :src="magazine?.cover_image_link" :alt="magazine?.title"
         data-src-placeholder="data:image/webp;base64,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"
    >
    <div class="card-content">
      <h2>{{ magazine?.title }}</h2>
      <p style="text-decoration: none;" class="py-0">
        {{magazine?.summary}}
      </p>
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
  /*margin: 20px;*/
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
.nuxt-link-excluded {
  text-decoration: none!important;
}
.nuxt-link-excluded:hover{
  transform: translateY(-5px);
}
</style>
