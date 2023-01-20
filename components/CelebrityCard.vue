<template>
  <div>
    <NuxtLink
      style="color:#000;"  class="circle text-center" :to="`/celebrity/${celebrity?.slug}`">
      <img height="200" width="200"
           style="object-fit: fill"
           :src="celebrity?.cover_image_link" :alt="celebrity.name">
      <div class="text-center">
        <h2 style="color: deeppink;font-size: 1rem;">
          {{celebrity?.name}}
          <br>
           <small class="text-muted" v-if="celebrity?.spots_count">
             ({{celebrity?.spots_count }} {{celebrity?.spots_count>1 ? ' spots' : 'spot' }})
           </small>
        </h2>

      </div>

    </NuxtLink>
  </div>
</template>

<script>
export default {
  props:['celebrity']
}
</script>
<style>

</style>
