<template>
  <div class="container-fluid p-0">
    <div class="d-none d-md-block p-0 mx-auto">
      <el-card v-if="spot" style="border-radius: 30px;max-width: 60vw;" :body-style="{padding: '0px'}">
        <div class="row p-0">
          <div class="col-md-6 col-sm- p-0">
            <nuxt-img
              format="webp"
                style="border-bottom-left-radius: 30px;border-top-left-radius: 30px"
                sizes="sm:100vw md:50vw lg:400px"
                class="figure-img img-fluid card-img-top shadow m-0"
                width="431"
                height="600"
                :fit="'fill'"
                :alt="spot.title"
                :src="spot.cover_image_link"
            />
          </div>
          <div class="col-md-6 col-sm- p-4" style="background-color: rgba(255,20,147,0.02)">
            <div class="pb-2 px-2">
              <div class="text-bold text-black"
                   style="font-size: 1.5rem;font-weight: bold;">
                {{ spot?.title }}
              </div>
              <p v-html="spot?.description"></p>
            </div>

            <div class="px-2" style="position:relative;top: 50px">
              <div class="row">
                <div ref="productSwiper" class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="width: auto;margin-right: 5px" v-for="product in spot?.products">
                      <ProductCard :product="product"/>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-2" style="position:relative;top: 50px">
              <div class="row">
                <div ref="productSwiper" class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="width: auto;margin-right: 5px" v-for="product in spot?.products">
                      <ProductCard :product="product"/>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 text-right pr-5" style="position:absolute;bottom: 50px">
              <span class="badge mr-2" style="color: deeppink">#{{ spot?.category?.name }}</span>
              <span class="badge mr-2" style="color: deeppink">#{{ spot?.celebrity?.name }}</span>
            </div>
          </div>
        </div>
      </el-card>
    </div>


    <div class="d-md-none d-sm-block">
      <el-card v-if="spot" class="mx-2"  style="border-radius: 30px" :body-style="{padding: '0px'}">
        <div class="row">
          <div class="col-sm-12">
            <nuxt-img
                format="webp"
                style="border-top-left-radius:20px;border-top-right-radius:20px"
                sizes="sm:60vw md:60vw lg:600px"
                :fit="'fill'"
                height="450"
                :alt="spot.title"
                :src="spot.cover_image_link"
            />
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
              <div class="slider">
                <div ref="swiper22d" class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="width: auto;margin-right: 5px" v-for="product in spot?.products">
                      <a
                          style="color:#000;"
                          :key="product?.id"
                          :href="product?.affiliate_link"
                          target="_blank"
                      >
                        <nuxt-img
                          format="webp"
                            sizes="sm:70vw md:70vw lg:600px"
                            style="height: 12vh"
                            class="w-full"
                            :src="product?.image_link"
                            :alt="spot?.title"
                        />
                        <p>
                          {{ product.name }}{{ product.price }}{{ product.currency }}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 text-right">
              <span class="badge mr-2" style="color: deeppink">#{{ spot?.category?.name }}</span>
              <span class="badge mr-2" style="color: deeppink">#{{ spot?.celebrity?.name }}</span>
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

  mounted() {
    new Swiper(this.$refs.swiper22, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: '1.5',
    })

    new Swiper(this.$refs.productSwipe22r, {
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

.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}

</style>
