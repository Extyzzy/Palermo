<template>
  <main class="product-page">
    <div class="product-page__container">
      <BreadCrumbs :data="breadCrumbsData" />
      <Product
        :configurations="[{ title: 'Объем памяти', option: 'checkbox', values: ['64Gb', '256Gb', '512Gb']}, { title: 'Цвет', option: 'checkbox', values: []}]"
        :features="[['Количество SIM-карт', '2'], ['Количество камер', '3'], ['Стандарт связи', 'GSM 900/1800/1900, 3G, 4G LTE, LTE-A, VoLTE'], ['Диагональ', '5.8']]"
        :foundOffers="3"
        :isInStock="true"
        :previewImages="[`${ product ? 'http://backend-dev.palermo.md/' + product.image : ''}`]"
        :priceRange="[product ? product.lowest_price : 16550, 18990]"
        :productData="productData"
        :vendorCode="product ? product.part_num : ''"
        :title="product ? product.translation : 'Placeholder'"
      />
      <Cards
        :rightMessage="$store.state.app.translation.trnsl_showmore"
        :data="dataCards"
        name="С этим товаром покупают"
      />
      <Cards
        :rightMessage="$store.state.app.translation.trnsl_showmore"
        :data="dataCards1"
        name="Аналогичные предложения"
      />
    </div>
  </main>
</template>

<script>
// import axios from 'axios'
// import config from '@/config'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import Cards from '@/components/Cards.vue'
import Product from '@/components/Product'
import 'vue-js-modal/dist/styles.css'

import productTemplate from '~/template/product'

export default {
  components: {
    BreadCrumbs,
    Cards,
    Product
  },
  data () {
    return {
      breadCrumbsData: [],
      id: this.$route.params.id,
      lang: this.$i18n.locale,
      productData: productTemplate,
      product: {},
      dataCards: [
        {
          src: 'https://i.imgur.com/VJSbrRk.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Наушники Apple AirPods Pro'
        },
        {
          src: 'https://i.imgur.com/zjBM3eB.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Чехол Apple силиконовый для Apple iPhone 11 Pro Max'
        },
        {
          src: 'https://i.imgur.com/nh4q8eY.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Беспроводная сетевая зарядка Belkin BOOST UP Qi'
        },
        {
          src: 'https://i.imgur.com/2LYw5M8.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Наушники Beats Solo Pro'
        },
        {
          src: 'https://i.imgur.com/3XwS68W.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Наушники AirPods с беспроводным футляром'
        },
        {
          src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 2999,
          currency: 'руб',
          title: 'MacBook Pro Retina Dispay'
        },
        {
          src: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 1499,
          currency: 'руб',
          title: 'iPad'
        },
        {
          src: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1880&q=80',
          price: 999,
          currency: 'руб',
          title: 'iPhone X 64Gb'
        },
        {
          src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 599,
          currency: 'руб',
          title: 'Apple Watch'
        },
        {
          src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          price: 299,
          currency: 'руб',
          title: 'Air Pods'
        },
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        }
      ],
      dataCards1: [
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        },
        {
          src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 2999,
          currency: 'руб',
          title: 'MacBook Pro Retina Dispay'
        },
        {
          src: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 1499,
          currency: 'руб',
          title: 'iPad'
        },
        {
          src: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1880&q=80',
          price: 999,
          currency: 'руб',
          title: 'iPhone X 64Gb'
        },
        {
          src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 599,
          currency: 'руб',
          title: 'Apple Watch'
        },
        {
          src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          price: 299,
          currency: 'руб',
          title: 'Air Pods'
        },
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        },
        {
          src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 2999,
          currency: 'руб',
          title: 'MacBook Pro Retina Dispay'
        },
        {
          src: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 1499,
          currency: 'руб',
          title: 'iPad'
        },
        {
          src: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1880&q=80',
          price: 999,
          currency: 'руб',
          title: 'iPhone X 64Gb'
        },
        {
          src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 599,
          currency: 'руб',
          title: 'Apple Watch'
        },
        {
          src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          price: 299,
          currency: 'руб',
          title: 'Air Pods'
        },
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        }
      ]
    }
  },
  async asyncData ({ app: { $axios, i18n: locale, localePath }, store, env, query: { id } }) {
    const product = (await $axios.$get('https://backend-dev.palermo.md/api/' + `product/${id}?lang=${store.state.app.lang}`)).data

    const breadCrumbsData = product.breadcrumbs.map((data, i) => {
      let nameLocalePath

      switch (i) {
        case 0:
          nameLocalePath = 'catalog-slug'
          break
        case 1:
          nameLocalePath = product.breadcrumbs.length === 2 ? 'category-list-slug' : 'category-slug'
          break
        case 2:
          nameLocalePath = 'category-list-slug'
          break
        default:
      }

      return {
        title: data.title,
        url: localePath({ name: nameLocalePath, params: { slug: data.url } })
      }
    })

    breadCrumbsData.push({ title: product.translation })

    return { product, breadCrumbsData }
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    }
  }
}
</script>

<style scoped>
  .product-page {
    background-color: #F6F8F9;
    padding: 20px 0 150px;
    width: 100%;
  }
  .product-page__container {
    margin: 0 auto;
    width: 1260px;
  }
</style>
