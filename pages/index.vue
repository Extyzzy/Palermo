<template>
  <main class="main">
    <no-ssr placeholder="Loading...">
      <div class="image-carousel">
        <div class="image-carousel__container">
          <carousel :items="1" :loop="false" :autoplay="true" :autoplayHoverPause="true" :nav="false">
            <img
              :key="index"
              v-for="(src, index) in carouselData"
              :src="src"
              :navText="[' 🡐 ',' 🡒 ']"
              class="slide"
            >
            <template slot="prev">
              <span class="prev main-carousel-nav">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8.108" viewBox="0 0 5 8.108" style="transform: scaleX(-1)"><path d="M59.6,0,58.65.946l3.108,3.108L58.65,7.162l.946.946L63.65,4.054Z" transform="translate(-58.65)" fill="#3b4b68" /></svg>
              </span>
            </template>
            <template slot="next">
              <span class="next main-carousel-nav">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8.108" viewBox="0 0 5 8.108"><path d="M59.6,0,58.65.946l3.108,3.108L58.65,7.162l.946.946L63.65,4.054Z" transform="translate(-58.65)" fill="#3b4b68" /></svg>
              </span>
            </template>
          </carousel>
        </div>
      </div>
    </no-ssr>
    <Cards
      v-bind:name="$store.state.app.translation.trnsl_bestseller"
      v-bind:rightMessage="$store.state.app.translation.trnsl_showmore"
      :data="dataCards"
    />
    <Cards
      v-bind:name="$store.state.app.translation.trnsl_recommendedtosee"
      v-bind:rightMessage="$store.state.app.translation.trnsl_showalloffers"
      :data="recommend"
    />
    <div class="container-actual">
      <h2 class="title-actual">
        {{ this.$t('main.trnsl_relevant') }}
      </h2>
      <div style="display: flex">
        <div class="images-actual">
          <img class="actual-image" src="https://images.unsplash.com/photo-1577696467736-817a155c4891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">
          <img class="actual-image" src="https://images.unsplash.com/photo-1577688770872-143e4385c2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80" alt="">
        </div>
        <img class="center-actual-image" src="https://images.unsplash.com/photo-1577776472694-3444b929388c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="">
        <div class="images-actual">
          <img class="actual-image" src="https://images.unsplash.com/photo-1577565354731-331f5fb65939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="">
          <img class="actual-image" src="https://images.unsplash.com/photo-1571942332472-d8bca8e6996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
        </div>
      </div>
    </div>
    <Cards
      v-bind:name="$store.state.app.translation.trnsl_youviewed"
      v-bind:rightMessage="$store.state.app.translation.trnsl_showmore"
      :data="seen"
    />
  </main>
</template>

<script>
import Cards from '~/components/Cards.vue'

export default {
  components: {
    Cards
  },
  data () {
    return {
      carouselData: [
        'https://i.imgur.com/xrB289K.jpg',
        'https://i.imgur.com/WY8p0wK.jpg',
        'https://i.imgur.com/OC54UOg.jpg',
        'https://i.imgur.com/KdL7lBO.jpg'
      ],
      recommend: [
        {
          src: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 549,
          currency: 'руб',
          title: 'Рубашки'
        },
        {
          src: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          price: 99,
          currency: 'руб',
          title: 'Шапочки'
        },
        {
          src: 'https://images.unsplash.com/photo-1512445181747-57ba1fa4ac83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
          price: 109,
          currency: 'руб',
          title: 'Майки'
        },
        {
          src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
          price: 359,
          currency: 'руб',
          title: 'Красовки'
        },
        {
          src: 'https://images.unsplash.com/photo-1440710835168-7727b8a0d9da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
          price: 989,
          currency: 'руб',
          title: 'Туфли'
        }
      ],
      seen: [
        {
          src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 239,
          currency: 'руб',
          title: 'Азиацкая еда'
        },
        {
          src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
          price: 12,
          currency: 'руб',
          title: 'Булочка'
        },
        {
          src: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 479,
          currency: 'руб',
          title: 'Апельсины'
        },
        {
          src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 99,
          currency: 'руб',
          title: 'Пелемени'
        },
        {
          src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 1499,
          currency: 'руб',
          title: 'Морожоное'
        },
        {
          src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 239,
          currency: 'руб',
          title: 'Азиацкая еда'
        },
        {
          src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
          price: 12,
          currency: 'руб',
          title: 'Булочка'
        },
        {
          src: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 479,
          currency: 'руб',
          title: 'Апельсины'
        },
        {
          src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 99,
          currency: 'руб',
          title: 'Пелемени'
        },
        {
          src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 1499,
          currency: 'руб',
          title: 'Морожоное'
        },
        {
          src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 239,
          currency: 'руб',
          title: 'Азиацкая еда'
        },
        {
          src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
          price: 12,
          currency: 'руб',
          title: 'Булочка'
        },
        {
          src: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 479,
          currency: 'руб',
          title: 'Апельсины'
        },
        {
          src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 99,
          currency: 'руб',
          title: 'Пелемени'
        },
        {
          src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 1499,
          currency: 'руб',
          title: 'Морожоное'
        },
        {
          src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 239,
          currency: 'руб',
          title: 'Азиацкая еда'
        },
        {
          src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80',
          price: 12,
          currency: 'руб',
          title: 'Булочка'
        },
        {
          src: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 479,
          currency: 'руб',
          title: 'Апельсины'
        },
        {
          src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 99,
          currency: 'руб',
          title: 'Пелемени'
        },
        {
          src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          price: 1499,
          currency: 'руб',
          title: 'Морожоное'
        }
      ],
      dataCards: [
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
  }
}
</script>

<style>
  :root {
    --var-txt-color-brand: #3B4B68;
    --var-txt-color-easy: #8E9BAD;
    --var-txt-color-easy-fin: #F6F8F9;
  }

  .image-carousel__container {
    padding-bottom: 20px;
  }

  .image-carousel__container .owl-carousel .owl-nav button.owl-prev,
  .image-carousel__container .owl-carousel .owl-nav button.owl-next {
    border-radius: 0;
  }

  .image-carousel__container > div {
    position: relative;
  }

  .main-carousel-nav {
    align-items: center;
    background-color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    z-index: 10;
  }

  .main-carousel-nav.prev {
    left: 0;
  }

  .main-carousel-nav.next {
    right: 0;
  }

  .title {
    display: block;
    font-weight: 300;
    font-size: 12px;
    color: #3B4B68;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

<style scoped>
main {
  background-color: var(--var-txt-color-easy-fin);
  padding-bottom: 150px;
}
</style>
