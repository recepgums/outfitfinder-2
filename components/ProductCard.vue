<template>
  <div class="row">
    <a style="color:#000;" target="_blank" :href="product?.affiliate_link">
        <div class="hero-image2"
             :style="`background-image:url(${product?.image_link})`"
        />
        <el-button size="small"  icon="el-icon-shopping-bag-1" round style="background-color: black;color:white">
          {{ product?.price }}
          {{ product?.currency }}
        </el-button>
    </a>
  </div>
</template>
<script>
export default {
  name:'ProductCard',
  props:['product']
}
</script>
<style>

.hero-image2 {
  height: 75px;
  width: 75px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}
</style>
