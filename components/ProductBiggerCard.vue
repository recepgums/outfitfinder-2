<template>
  <div class="row">
    <a style="color:#000;text-align: center" target="_blank" rel="nofollow" :href="product?.affiliate_link">
        <div class="hero-image2"
             :lazy-background="product?.image_link"
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
  name:'ProductBiggerCard',
  props:['product']
}
</script>
<style scoped>

.hero-image2 {
  height: 150px;
  width: 150px;
  margin: 5px;
  border-radius: 10px;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}
</style>
