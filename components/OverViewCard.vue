<template>
  <el-card v-if="spot" style="border-radius: 20px;padding: 0!important;" :body-style="{ padding: '0px',borderRadius:'30px',minHeight:'400px' }">
    <NuxtLink :to="`/spot/${spot.slug}`">
      <div class="hero-image" :style="`background-image:url(${spot.cover_image_link})`">
        <div class="div-over-image-top">
          {{spot.celebrity.name}}
        </div>
        <div class="div-over-image-bottom">
          <h2 style="font-size: 1rem">
            {{ spot.title }}
          </h2>
          <div class="row">
            <ProductCard class="col-sm-4 col-4 my" :key="product.id" :product="product" v-for="product in spot.products"/>
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
  border-radius: 20px 20px 20px 0;
  background-color: black;
  padding: 5px;
  color: #FFFFFF;
  font-weight: bold;
}
.div-over-image-bottom{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  bottom: 0;
  z-index: 3;
  padding-bottom: 20px;
  padding-left: 20px;
  display: block;
  font-size: 1rem;
  width: 100%;
  height: 40%;
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
  background-size: cover;
  position: relative;
}

@media only screen and (max-width: 600px) {
  .div-over-image-bottom {
    height: 50%;
  }
}

@media screen and (max-width: 1130px) {
  .div-over-image-bottom {
    height: 35%;
  }
}
</style>
