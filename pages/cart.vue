<template>
  <main>
    <div class="cart-page">
      <div class="cart-page__container">
        <div class="cart">
          <!-- Listing products -->
          <template v-if="$store.state.shopCart.carts && $store.state.shopCart.carts.length">
            <h2 class="cart-page__title">
              Моя корзина
            </h2>
            <div>
              <div :key="index" v-for="({ companyName, products }, index) in $store.state.shopCart.carts" class="company-cart">
                <div class="company-cart__container">
                  <div class="company-cart__head">
                    <div class="company-cart__col-naming">
                      <p class="company-cart__head-section-name">
                        Наименование
                      </p>
                    </div>
                    <div class="company-cart__col-quantity">
                      <p class="company-cart__head-section-name">
                        Количество
                      </p>
                    </div>
                    <div class="company-cart__col-price">
                      <p class="company-cart__head-section-name">
                        Цена
                      </p>
                    </div>
                    <div class="company-cart__col-sum">
                      <p class="company-cart__head-section-name">
                        Сумма
                      </p>
                    </div>
                  </div>
                  <div class="company-cart__products">
                    <div :key="index" v-for="({ slug, quantity, price }, index) in products" class="cart-product">
                      <div class="cart-product__container">
                        <div class="cart-product__col-naming">
                          <div class="cart-product__col-naming-container">
                            <div class="cart-product__thumbnail-wrapper">
                              <img src="" alt="" class="cart-product__thumbnail">
                            </div>
                            <div class="cart-product__data">
                              <div class="cart-product__about">
                                <h2 class="cart-product__name">
                                  {{ slug }}
                                </h2>
                              </div>
                              <button class="cart-product__favourite-button">
                                <span class="cart-product__favourite-button-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="17.391" height="16" viewBox="0 0 17.391 16"><path d="M8.7,36.4,7.478,35.183c-4.522-4-7.478-6.7-7.478-10A4.715,4.715,0,0,1,4.783,20.4,5.226,5.226,0,0,1,8.7,22.226,5.226,5.226,0,0,1,12.609,20.4a4.715,4.715,0,0,1,4.783,4.783c0,3.3-2.957,6-7.478,10Z" transform="translate(0 -20.4)" fill="#8E9BAD" /></svg>
                                </span>
                                Сохранить в избранное
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="cart-product__col-quantity">
                          <div class="cart-product__col-quantity-container">
                            <button @click="decreaseQuantity(companyName, slug)" class="cart-product__change-quantity-button">
                              <span class="cart-product__change-quantity-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2"> <path id="Path_9" data-name="Path 9" d="M14,155H0v-2H14Z" transform="translate(0 -153)" fill="#8e9bad" /> </svg>
                              </span>
                            </button>
                            <p class="cart-product__quantity-counter">
                              {{ quantity }}
                            </p>
                            <button @click="increaseQuantity(companyName, slug)" class="cart-product__change-quantity-button">
                              <span class="cart-product__change-quantity-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"> <path id="Path_8" data-name="Path 8" d="M14,8H8v6H6V8H0V6H6V0H8V6h6Z" fill="#8e9bad" /> </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div class="cart-product__col-price">
                          <p class="cart-product__price">
                            {{ price }} руб.
                          </p>
                        </div>
                        <div class="cart-product__col-sum">
                          <p class="cart-product__sum">
                            {{ price * quantity }} руб.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="company-cart__footer">
                    <div class="company-cart__overview">
                      <p class="company-cart__company-name">
                        Продавец: <span class="bold">{{ companyName }}</span>
                      </p>
                      <p class="company-cart__cost-text">
                        Cтоимость товаров:
                      </p>
                      <p class="company-cart__cost-sum">
                        16 760 руб.
                      </p>
                    </div>
                    <button class="company-cart__order-button">
                      ОФОРМИТЬ ЗАКАЗ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- <p class="product-title">{{ productData.tabs[0].data[product].company.name }}</p> -->

          <!-- Empty cart -->
          <div v-else class="empty-cart">
            <h3 class="empty-cart__title">
              В корзине нет товаров
            </h3>
            <p class="empty-cart__message">
              Текст
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {

    }
  },
  methods: {
    decreaseQuantity (companyName, slug) {
      this.$store.commit('shopCart/DECREASE_QUANTITY', { companyName, slug })
    },
    increaseQuantity (companyName, slug) {
      this.$store.commit('shopCart/INCREASE_QUANTITY', { companyName, slug })
    }
  }
}
</script>

<style scoped>
  .cart-page {
    background-color: #F6F8F9;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    height: 100%;
    min-height: 615px;
    padding: 40px 0 200px;
  }

  .cart-page__container {
    margin: 0 auto;
    max-width: 1260px;
    width: 100%;
  }

  .cart-page__title {
    color: #3B4B68;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .empty-cart {
    background-color: #ffffff;
    padding: 30px;
    min-height: 190px;
    height: auto;
  }

  .empty-cart__title {
    color: #3B4B68;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .empty-cart__message {
    font-size: 14px;
  }

  .company-cart {
    background-color: #ffffff;
    margin-bottom: 17px;
    padding: 30px;
  }

  .company-cart__head {
    border-bottom: 1px solid #CED6E0;
    display: flex;
    padding-bottom: 20px;
  }

  .company-cart__col-naming,
  .cart-product__col-naming {
    width: 54.15%;
  }

  .company-cart__col-quantity,
  .cart-product__col-quantity {
    width: 14.15%
  }

  .company-cart__col-price,
  .cart-product__col-price,
  .company-cart__cost-text {
    width: 15%;
  }

  .company-cart__col-sum,
  .cart-product__col-sum,
  .company-cart__cost-sum {
    width: 16.66%;
  }

  .company-cart__head-section-name {
    color: #3B4B68;
    font-size: 12px;
  }

  .company-cart__products {
    margin-bottom: 30px;
  }

  .cart-product {
    border-bottom: 1px solid #CED6E0;
    padding: 30px 0;
  }

  .cart-product__container {
    display: flex;
  }

  .cart-product__col-naming-container {
    align-items: center;
    display: flex;
  }

  .cart-product__thumbnail-wrapper {
    height: 70px;
    margin-right: 30px;
    width: 70px;
  }

  .cart-product__thumbnail {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }

  .cart-product__data {
    display: flex;
    flex-direction: column;
  }

  .cart-product__about {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .cart-product__name {
    color: #3B4B68;
    font-size: 14px;
    font-weight: 400;
  }

  .cart-product__favourite-button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: #3B4B68;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    padding: 0;
  }

  .cart-product__favourite-button-icon {
    display: inline-flex;
    margin-right: 10px;
  }

  .cart-product__col-quantity {
    align-items: center;
    display: flex;
  }

  .cart-product__col-quantity-container {
    align-items: center;
    display: flex;
  }

  .cart-product__change-quantity-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

  .cart-product__change-quantity-button-icon {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .cart-product__quantity-counter {
    color: #3B4B68;
    font-variant-numeric: tabular-nums;
    font-size: 14px;
    font-weight: 700;
    margin: 0 20px;
  }

  .cart-product__col-price,
  .cart-product__col-sum {
    align-items: center;
    display: flex;
  }

  .cart-product__price,
  .cart-product__col-sum,
  .company-cart__cost-sum {
    color: #3B4B68;
    font-size: 18px;
    font-weight: 700;
  }

  .company-cart__footer {
    margin-bottom: 70px;
  }

  .company-cart__overview {
    align-items: center;
    color: #3B4B68;
    display: flex;
    margin-bottom: 40px;
  }

  .company-cart__company-name {
    font-size: 14px;
    width: 68.3%
  }

  .bold {
    font-weight: 700;
  }

  .company-cart__cost-text {
    font-size: 14px;
  }

  .company-cart__order-button {
    background-color: #E0E4ED;
    border: none;
    border-radius: 20px;
    color: #3B4B68;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin-left: 68.3%;
    padding: 12px 42px;
    text-transform: uppercase;
  }
</style>
