<template>
  <el-card v-if="spot" :body-style="{ padding: '0px',borderRadius:'30px' }">
    <NuxtLink :to="`/spot/${spot.slug}`">
      <nuxt-img
          format="webp"
          sizes="sm:50vw md:50vw lg:400px"
          width="400"
          height="500"
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
        <div class="col-sm-3" v-for="product in spot.products" :key="product.id">
          <NuxtLink style="color:#000;" :to="product.affiliate_link">
            <nuxt-img
              provider="ipx"
              format="webp"
              sizes="sm:5vw md:5vw lg:40px"
              width="100"
              class="w-full"
              :src="product?.image_link"
              :alt="spot?.title"
            />
            <p>
              {{ product.name }}{{ product.price }}{{ product.currency }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="px-6 py-4">
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
.spot-description{
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
