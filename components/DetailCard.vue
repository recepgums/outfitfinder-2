<template>
  <div class="container-md p-0">
    <div class="d-none d-md-block p-0">
      <el-card v-if="spot" class="mx-auto" style="border-radius: 30px;max-width: 80vw;" :body-style="{padding: '0px'}">
        <div class="row p-0">
          <div class="col-md-6 col-sm-12 p-0">
            <el-carousel arrow="always" height="70vh">
              <el-carousel-item v-for="image in spot.images" :key="item">
                <el-image
                  style="border-bottom-left-radius: 30px;border-top-left-radius: 30px;height: 100%"
                  class="figure-img img-fluid card-img-top shadow m-0"
                  :fit="'contain'"
                  :alt="spot.title"
                  :src="image"
                  :preview-src-list="spot.images"
                />
              </el-carousel-item>
            </el-carousel>

          </div>
          <div class="col-md-6 col-sm-12 p-4" style="background-color: rgba(255,20,147,0.02)">
            <div class="pb-2 px-2">
              <div class="text-bold text-black"
                   style="font-size: 1.5rem;font-weight: bold;">
                {{ spot?.title }}
              </div>
              <p v-html="spot?.description"></p>
            </div>

            <div class="px-2" style="position:relative;top: 0px">
              <client-only>
                <div class="row">
                  <div class="swiper-slide col-md-3 col-3" style="width: auto;margin-right: 5px"
                       v-for="product in spot?.products" :key="product.id">
                    <ProductCard :product="product"/>
                  </div>
                </div>
                <br>
                <p class="text-muted">Buy for less</p>
                <hr>

                <div class="row">
                  <div class="col-md-3 col-3" style="width: auto;margin-right: 5px"
                       v-for="product in spot?.products" :key="product.id">
                    <ProductCard :product="product?.suggestion_product"/>
                  </div>
                </div>
              </client-only>
            </div>
            <div class="col-12 text-right pr-5" style="position:absolute;bottom: 10px">
              <NuxtLink :to="`/category/${spot?.category?.slug}`" >
                <el-tag type="success">#{{ spot?.category?.name }}</el-tag>
              </NuxtLink>
              <NuxtLink :to="`/celebrity/${spot?.celebrity?.slug}`" >
                <el-tag type="success">#{{ spot?.celebrity?.slug }}</el-tag>
              </NuxtLink>
            </div>
          </div>
        </div>
      </el-card>
    </div>


    <div class="d-md-none d-sm-block">
      <el-card v-if="spot" class="mx-2" style="border-radius: 30px" :body-style="{padding: '0px'}">
        <div class="row">
          <div class="col-sm-12">
            <el-carousel trigger="click"  arrow="always" indicator-position="outside">
              <el-carousel-item v-for="image in spot.images" :key="item">
                <el-image
                  format="webp"
                  style="border-bottom-left-radius: 30px;border-top-left-radius: 30px"
                  sizes="sm:100vw md:50vw lg:400px"
                  class="figure-img img-fluid card-img-top shadow m-0"
                  :fit="'fill'"
                  :alt="spot.title"
                  :src="image"
                  :preview-src-list="spot.images"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="col-sm-12">
            <div class="pb-2 px-2">
              <div class="text-bold text-black"
                   style="font-size: 1.5rem;font-weight: bold;">
                {{ spot?.title }}
              </div>
              <p v-html="spot?.description"></p>
            </div>
            <div class="px-2">
              <client-only>
                <div class="row">
                  <div class="swiper-slide col-md-3 col-3" style="width: auto;margin-right: 5px"
                       v-for="product in spot?.products" :key="product.id">
                    <ProductCard :product="product"/>
                  </div>
                </div>
                <br>
                <p class="text-muted">Buy for less</p>
                <hr>

                <div class="row">
                  <div class="col-md-3 col-3" style="width: auto;margin-right: 5px"
                       v-for="product in spot?.products" :key="product.id">
                    <ProductCard v-if="product?.suggestion_product" :product="product?.suggestion_product"/>
                  </div>
                </div>
              </client-only>
            </div>
            <div class="col-12 text-right mt-2">
              <NuxtLink :to="`/category/${spot?.category?.slug}`" >
                <el-tag type="success">#{{ spot?.category?.name }}</el-tag>
              </NuxtLink>
              <NuxtLink :to="`/celebrity/${spot?.celebrity?.slug}`" >
                <el-tag type="success">#{{ spot?.celebrity?.slug }}</el-tag>
              </NuxtLink>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

import Swiper, {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'OverViewCard',
  props: ['spot'],
  data() {
    return {
      content: '',
      spots: [],
    }
  },

  mounted() {
    new Swiper(this.$refs.swiper22, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: '1.5',
    })

    new Swiper(this.$refs.productSwiper, {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: -10,
      slidesPerGroup: 1,
      lazy: !0,
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {el: ".swiper-pagination", dynamicBullets: true, clickable: true,},
      breakpoints: {
        545: {slidesPerView: 1, spaceBetween: 10},
        768: {slidesPerView: 2, spaceBetween: 15},
        992: {slidesPerView: 2, spaceBetween: 20},
        1200: {slidesPerView: 3, spaceBetween: 20},
        1400: {slidesPerView: 3, spaceBetween: 30}
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  },
}

</script>
<style>
.at-the-bottom {
  position: absolute;
  bottom: 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

@media only screen and (max-width: 600px) {
  .el-carousel__item{
    max-height: 60vh;
  }
  .el-carousel__arrow{
    background-color: #ff1493ba;
  }
  .el-carousel__container{
    max-height: 60vh!important;
  }

}
</style>
