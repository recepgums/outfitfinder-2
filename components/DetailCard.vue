<template>
  <div >
    <div class="d-none d-md-block p-0">
      <el-card v-if="spot" class="mx-auto" style="border-radius: 30px;max-width: 80vw;max-height: initial;" :body-style="{padding: '0px'}">
        <div class="row p-0">
          <div class="col-md-6 col-sm-12 p-0">
            <el-carousel :arrow="spot.images.length > 1 ? 'always' :'never'" height="70vh">
              <el-carousel-item v-for="image in spot.images" :key="image">
                <img
                  style="
                  border-bottom-left-radius: 30px;
                  border-top-left-radius: 30px;
                  object-fit: contain;
                  height: 100%;"
                  class="figure-img img-fluid card-img-top shadow m-0"
                  :alt="spot.title"
                  :data-src="image"
                  data-src-placeholder="data:image/webp;base64,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"
                  v-lazy-load
                />
              </el-carousel-item>
            </el-carousel>

          </div>
          <div class="col-md-6 col-sm-12 p-4" style="background-color: rgba(255,20,147,0.02)">
            <div class="pb-2 px-2">
              <div class="text-bold text-black"
                   style="font-size: 1.5rem;font-weight: bold;">
                <h1>{{spot?.title}}</h1>
              </div>
              <p v-html="spot?.description"></p>
            </div>

            <div class="px-2" style="position:relative;top: 0px">
              <Flicking   :options="{ renderOnlyVisible: true,align:'prev',defaultIndex: 1,circular:true}">
                <ProductBiggerCard :product="product"  v-for="product in spot?.products" :key="product.id"/>
                <span slot="viewport" class="flicking-arrow-prev"></span>
                <span slot="viewport" class="flicking-arrow-next"></span>
              </Flicking>
              <br>
              <div v-if="spot?.products.filter(item => item.suggestion_product).length > 0">
                <p class="text-muted">Buy for less</p>
                <hr>
                <Flicking   :options="{ renderOnlyVisible: true,align:'prev',defaultIndex: 1,circular:true }">
                  <ProductBiggerCard :product="product"  v-for="product in spot?.products" :key="product.id"/>
                </Flicking>
              </div>
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
      <el-card v-if="spot" class="mx-2" style="border-radius: 30px;max-height: initial!important;" :body-style="{padding: '0px'}">
        <div class="row">
          <div class="col-sm-12">
            <el-carousel :arrow="spot.images.length > 1 ? 'always' :'never'" height="70vh" indicator-position="outside">
              <el-carousel-item v-for="image in spot.images" :key="image">
                <img
                  style="
                  border-bottom-left-radius: 30px;
                  border-top-right-radius: 30px;
                  object-fit: contain;
                  height: 100%;"
                  class="figure-img img-fluid card-img-top shadow m-0"
                  :alt="spot.title"
                  :data-src="image"
                  data-src-placeholder="data:image/webp;base64,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"
                  v-lazy-load
                />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="col-sm-12">
            <div class="pb-2 px-2">
              <div class="text-bold text-black"
                   style="font-size: 1.5rem;font-weight: bold;">
                <h1>{{spot?.title}}</h1>
              </div>
              <p v-html="spot?.description"></p>
            </div>
            <div class="px-2">
                <Flicking   :options="{ renderOnlyVisible: true,align:'prev',defaultIndex: 0,circular:true }">
                  <ProductBiggerCard :product="product"  v-for="product in spot?.products" :key="product.id"/>
                </Flicking>
                <br>
                <div v-if="spot?.products.filter(item => item.suggestion_product).length > 0">
                  <p class="text-muted">Buy for less</p>
                  <hr>
                  <Flicking   :options="{ renderOnlyVisible: true,align:'prev',defaultIndex: 0,circular:true,defaultIndex:1 }">
                    <ProductBiggerCard :product="product"  v-for="product in spot?.products" :key="product.id"/>
                  </Flicking>
                </div>
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
import { Fade } from "@egjs/flicking-plugins";

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

.el-carousel__arrow{
  background-color: #ff1493ba;
}
@media only screen and (max-width: 600px) {
  .el-carousel__item{
    max-height: 60vh;
  }
  .el-carousel__container{
    max-height: 60vh!important;
  }
}
h1  {
  font-size: 1.5rem!important;
}
</style>
