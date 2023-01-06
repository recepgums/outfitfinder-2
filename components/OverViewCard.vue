<template>
  <el-card v-if="spot" style="border-radius: 20px" :body-style="{ padding: '0px',borderRadius:'30px',minHeight:'650px' }">
    <NuxtLink :to="`/spot/${spot.slug}`">
      <el-image
        format="webp"
        sizes="sm:50vw md:50vw lg:400px"
        style="object-fit: contain;"
        :fit="'fill'"
        :alt="spot.title"
        :src="spot.cover_image_link"
      />
     <div class="div-over-image-top">
          {{spot.celebrity.name}}
     </div>
      <hr style="color: white;height: 2px">
      <div class="div-over-image-bottom">
        <h2 style="font-size: 1.4rem">
          {{ spot.title }}
        </h2>
        <div v-html="spot.description"/>
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
.spot-description {
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.div-over-image-top{
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 3;
  background-color: #92AD40;
  padding: 5px;
  color: #FFFFFF;
  font-weight: bold;
}
.div-over-image-bottom{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  bottom: 10px;
  z-index: 3;
  padding: 10px 10px;
  display: block;
  font-size: 1rem;
  width: 20px;
  height: 25%;
  min-width: 90%;
  color: #FFFFFF!important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: normal;
}
.invert {
  background-color: white;
  filter: invert(100%);
}
</style>
