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

    <div class="pb-2 px-2">
      <NuxtLink :to="`/spot/${spot.slug}`">
        <div class="text-bold">{{ spot.title }}</div>
      </NuxtLink>
      <p class="spot-description" v-html="spot.description"></p>

      <div class="row">
        <div style="border-radius: 40px;padding: 1rem" class="col-sm-4 py-2 text-center" v-for="product in spot.products" :key="product.id">
         <ProductCard
           v-if="product"
          :product="product"
         />
        </div>
      </div>
    </div>
    <div class="p-2 text-right" style="color: deeppink">
      <span class="badge mr-2">#{{ spot.category.name }}</span>
      <span class="badge mr-2">#{{ spot.celebrity.name }}</span>
    </div>
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
