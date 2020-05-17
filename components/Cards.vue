<template>
  <div class="back-color">
    <div class="container">
      <div class="top">
        <h4 class="title">
          {{ name }}
        </h4>
      </div>
      <div class="cards">
        <no-ssr>
          <!-- important to add no-ssr-->
          <carousel :items="1" :loop="true" :autoplay="false" :autoplayHoverPause="true" :margin="15">
            <div :key="index" v-for="(cardData, index) in carouselData" class="cards-wrapper">
              <!-- <div class="bottom" v-for="{title, price, src, currency} in cardData">
                <img class="image" :src="src" :alt="title">
                <p class="titleCard">{{title}}</p>
                <h3 class="price">от {{price}} {{currency}}.</h3>
              </div> -->
              <ProductCard
                v-for="({title, price, src, currency}, index) in cardData"
                :currency="currency"
                :from="true"
                :key="index"
                :price="price"
                :imgSrc="src"
                :title="title"
                url="#"
              />
            </div>
          </carousel>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard'

export default {
  name: 'Cards',
  components: {
    ProductCard
  },
  props: ['data', 'name'],
  data () {
    return {
      carouselData: null
    }
  },
  created () {
    this.divideIntoArrays()
  },
  methods: {
    divideIntoArrays () {
      this.carouselData = []
      let tempArray = []

      for (let i = 0; i < this.data.length; i += 5) {
        tempArray = []
        for (let j = i; j < i + 5; j++) {
          tempArray.push(this.data[j])
        }
        this.carouselData.push(tempArray)
      }
    }
  }
}
</script>

<style>
.cards-wrapper {
  display: flex;
  width: 1260px;
}
  .cards {
    position: relative;
  }
  .cards .owl-nav {
    position: absolute;
    top: 30px;
  }

  .cards .owl-dots {
    margin-top: 30px;
  }
  .cards .owl-theme .owl-dots .owl-dot span {
    background-color: #8E9BAD;
  }

  .cards .owl-theme .owl-nav {
    position: absolute;
    top: -50px;
  }

  .cards .owl-prev {
    right: -1220px;
  }
  .cards .owl-next {
    left: 1225px !important;
    position: absolute;
    top: -10px;
  }
  .image-carousel__container .owl-nav {
    position: absolute;
  }
  .image-carousel__container .owl-theme .owl-nav {
    position: absolute;
    top: 150px;
  }
   .owl-theme .owl-dots .owl-dot span {
    background-color: white;
    border-radius: 25px;
  }
  .owl-theme .owl-dots .owl-dot span {
    margin: 4px 5px !important;
  }
   .active span {
    background-color: #3b4b68 !important;
    width: 15px !important;
  }
  .image-carousel__container .owl-theme .owl-dots {
    position: absolute;
    bottom: 25px;
    left: 65px;
  }
  .image-carousel__container .owl-prev {
    left: 0;
  }
  .image-carousel__container .owl-nav button {
    margin: 0 !important;
  }
  .owl-prev {
    width: 30px;
    background-color: white !important;
    height: 30px;
    font-size: 26px !important;
    position: relative;
  }
  .owl-next {
    position: relative;
    width: 30px;
    background-color: white !important;
    height: 30px;
    font-size: 26px !important;
    right: 0 !important;
  }
  .owl-prev:hover {
    color: #3b4b68 !important;
  }
  .owl-next:hover {
    color: #3b4b68 !important;
  }
  .owl-prev span {
     position: absolute;
     right: 11px;
     top: -6px;
   }
  .owl-prev:focus {
    outline: none;
  }
  .owl-next:focus {
    outline: none;
  }
  .owl-prev:active span {
    right: 13px;
    color: #8E9BAD !important;
  }
  .owl-next:active span {
    right: 8px;
  }
  .owl-next:hover span {
    color: #8E9BAD !important;
  }
  .owl-prev:hover span {
    color: #8E9BAD !important;
  }
  .owl-next span {
    position: absolute;
    right: 11px;
    top: -6px;
  }
  .image-carousel__container .owl-next {
    left: 1230px !important;
    position: absolute;
    top: -10px;
  }
  .owl-prev {
    position: absolute;
    top: -10px;
  }
  /* .carousel--controls>.carousel__control--prev,
  .carousel--controls>.carousel__control--next {
    transform: translate(0) !important;
  } */
  .center-actual-image {
    width: 410px;
    height: 535px;
    object-fit: cover;
    padding-right: 5px;
  }
  .title-actual {
    color: var(--var-txt-color-brand);
    font-size: 20px;
    font-weight: bold;
    padding: 30px 0;
  }
  .image-carousel {
    background-color: var(--var-txt-color-easy-fin);
    z-index: 2;
  }
  .image-carousel__container {
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
    position: relative;
  }
  .container-actual {
    cursor: pointer;
    margin: 0 auto;
    max-width: 1260px;
    padding-bottom: 50px;
  }
  .actual-image {
    width: 410px;
    height: 270px;
    object-fit: cover;
    padding-bottom: 5px;
    padding-right: 5px;
  }
  .images-actual {
    display: flex;
    flex-direction: column;
  }
  .slide {
    height: 330px;
    object-fit: cover;
    width: 100%;
  }
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>

<style scoped>
  .back-color {
    background-color: var(--var-txt-color-easy-fin);
    width: 100%;
    padding: 50px 0;
    z-index: 2;
  }
  .container {
    width: 1260px;
    margin: 0 auto;
  }
  .titleCard {
    font-size: 12px;
    color: var(--var-txt-color-brand);
    font-weight: 300;
    padding-left: 10px;
  }
  .bottom {
    width: 240px;
    display: flex;
    flex-direction: column;
    height: 400px;
    line-height: 6em;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 15px;
  }
  .bottom:last-child {
    margin-right: 0;
  }
  .price {
    font-size: 18px;
    color: var(--var-txt-color-brand);
    font-weight: bold;
    padding-left: 10px;
  }
  .image {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 5px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;
  }
  .title {
    color: var(--var-txt-color-brand);
    font-size: 20px;
    font-weight: bold;
  }
</style>
