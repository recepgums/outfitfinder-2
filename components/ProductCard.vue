<template>
  <div>
    <a style="color:#000;" target="_blank" :href="product.affiliate_link">
      <el-card :body-style="{ padding: '0px'}">
        <el-image
          provider="ipx"
          format="webp"
          style="object-fit: contain;width: 100px"
          class="w-full"
          :src="product?.image_link"
          :alt="spot?.title"
        />

      </el-card>
      <a :href="product.affiliate_link" target="_blank">
        <el-button size="small"  icon="el-icon-shopping-bag-1" round style="background-color: black;color:white">
          {{ product.price }}
          {{ product.currency }}
        </el-button>
      </a>
    </a>
  </div>
</template>
<script>
export default {
  name:'ProductCard',
  props:['product']
}
</script>
