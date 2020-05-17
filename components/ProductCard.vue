<template>
  <div class="product-card">
    <img
      :alt="title"
      :src="imgSrc"
      class="product-card__thumbnail"
    >
    <div class="product-card__information">
      <p v-html="title" class="product-card__title" />
      <p class="product-card__price">
        {{ `${from ? "от" : ''} ${formatedPrice} ${currency}` }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  extends: {},
  mixins: [],
  props: {
    currency: {
      type: String,
      default: 'руб.'
    },
    from: {
      type: Boolean,
      default: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      priceFormatStyle: new Intl.NumberFormat('ru-RU')
    }
  },
  computed: {
    formatedPrice () {
      return this.priceFormatStyle.format(this.price)
    }
  }
}
</script>

<style scoped>
  .product-card {
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 420px;
    margin : 0 15px 15px 0;
    max-width: 240px;
    width: 100%;
  }

  .product-card__thumbnail {
    display: block;
    height: 240px;
    object-fit: contain;
    padding: 15px;
    width: 240px;
  }

  .product-card__information {
    box-sizing: border-box;
    color: #3B4B68;
    padding: 15px;
    text-align: left;
  }

  .product-card__title {
    color: #3B4B68;
    font-size: 12px;
    height: 70px;
    margin-bottom: 30px;
  }

  .product-card__price {
    color: #3B4B68;
    font-size: 18px;
    font-weight: 700;
  }
</style>
