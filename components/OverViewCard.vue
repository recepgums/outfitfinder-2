<template>
  <el-card v-if="spot" style="border-radius: 20px;padding: 0!important;" :body-style="{ padding: '0px',borderRadius:'30px',minHeight:'400px' }">
    <NuxtLink :to="`/spot/${spot.slug}`">
      <div class="hero-image"
           :lazy-background="spot.cover_image_link"
           data-src-placeholder="data:image/webp;base64,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"
      >
        <div class="div-over-image-top">
          {{spot.celebrity.name}}
        </div>
        <div class="div-over-image-bottom">
          <h2 style="font-size: 1rem">
            {{ spot.title }}
          </h2>
          <div class="row">
            <ProductCard :class=" spot.products.length < 4 ? 'col-sm-4 col-4' : 'col-sm-'+12/spot.products.length +' col-'+12/spot.products.length"
                         :key="product.id" :product="product" v-for="product in spot.products"/>
          </div>
        </div>
      </div>
    </NuxtLink>
  </el-card>
</template>

<script>
export default {
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
.div-over-image-top{
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 3;
  /*background-color: #ff00c2d1;*/
  background-color: #000;
  border-radius: 20px 0 20px 0;
  padding: 5px;
  color: #FFFFFF;
  font-weight: bold;
}
.div-over-image-bottom{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  bottom: 35px;
  z-index: 3;
  padding-bottom: 20px;
  padding-left: 20px;
  display: block;
  font-size: 1rem;
  width: 100%;
  height: auto;
  color: #FFFFFF!important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: normal;
  overflow: hidden;
}
.invert {
  background-color: white;
  filter: invert(100%);
}

.hero-image {
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}

@media only screen and (max-width: 600px) {
  .div-over-image-bottom {
    height: 40%;
  }
}

@media screen and (max-width: 1130px) {
  .div-over-image-bottom {
    height: 45%;
    min-height: 150px;
    max-height: 255px;
  }
}
</style>
