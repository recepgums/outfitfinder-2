<template>
  <el-card v-if="spot" style="border-radius: 20px" :body-style="{ padding: '0px',borderRadius:'30px',minHeight:'650px' }">
    <NuxtLink :to="`/spot/${spot.slug}`">
      <nuxt-img
        format="webp"
        sizes="sm:50vw md:50vw lg:400px"
        style="object-fit: contain;"
        :fit="'fill'"
        :alt="spot.title"
        :src="spot.cover_image_link"
      />
    </NuxtLink>
  </el-card>
</template>

<script>

export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
  name: 'OverViewCard',
  props: ['spot'],
  data() {
    return {
      content: '',
      spots: [],
    }
  },
}

</script>
<style>
.spot-description {
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
