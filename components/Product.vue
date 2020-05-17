<template>
  <div class="product-wrapper">
    <div class="product">
      <div class="product__images">
        <div class="product__carousel">
          <carousel
            id="product-carousel"
            :rewind="false"
            :items="1"
            :loop="true"
            :autoplay="false"
            :autoplayHoverPause="true"
          >
            <!-- <div class="cards-wrapper" :key="index" v-for="(cardData, index) in carouselData"> -->
            <!-- <div class="bottom" v-for="{title, price, src, currency} in cardData">
                <img class="image" :src="src" :alt="title">
                <p class="titleCard">{{title}}</p>
                <h3 class="price">от {{price}} {{currency}}.</h3>
              </div> -->
            <div
              :key="index"
              v-for="(url, index) in previewImages"
              class="product__preview"
            >
              <img :src="url" class="product__preview-img">
            </div>
            <!-- </div> -->
          </carousel>
        </div>
        <!-- <div class="product__preview">
          <img :src="thumbnail-url" :alt="title" class="product__preview-img">
        </div>
        <div class="product__preview-slider-images">
          <div class="product__preview-slider-image-wrapper" :key="index" v-for="(url, index) in previewImages">
            <img class="product__preview-slider-image" :src="url" alt="">
          </div>
        </div> -->
      </div>
      <div class="product__information">
        <div class="product__head">
          <h3 v-html="title" class="product__name" />
          <div class="product__meta-information">
            <div class="product__meta-data">
              <span class="product__is-in-stock" />
              {{ isInStock ? translations.trnsl_in_stock : translations.trnsl_not_in_stock }}
            </div>
            <div class="product__meta-data">
              {{ `${translations.trnsl_articul}: ${vendorCode}` }}
            </div>
            <div class="product__meta-data">
              <button class="product__favourite">
                <span class="product__favourite-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17.391" height="16" viewBox="0 0 17.391 16"><path d="M8.7,36.4,7.478,35.183c-4.522-4-7.478-6.7-7.478-10A4.715,4.715,0,0,1,4.783,20.4,5.226,5.226,0,0,1,8.7,22.226,5.226,5.226,0,0,1,12.609,20.4a4.715,4.715,0,0,1,4.783,4.783c0,3.3-2.957,6-7.478,10Z" transform="translate(0 -20.4)" fill="#8e9bad" /></svg>
                </span>
                {{ translations.trnsl_in_favorite }}
              </button>
            </div>
            <div class="product__meta-data">
              <span class="product__rating-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"><g transform="translate(-465.736 -1070)"><g transform="translate(-846.264 886)"><g transform="translate(1312 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1331 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1350 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1388 184)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /></g><g transform="translate(1369 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g></g></g></svg>
              </span>
              <p>(23 {{ translations.trnsl_feedback }})</p>
            </div>
          </div>
        </div>
        <div class="product__features">
          <div class="product__features-list">
            <div :key="index" v-for="(feature, index) in features" class="product__feature">
              <p class="product__feature-property">
                {{ feature[0] }}:
              </p>
              <p class="product__feature-value">
                {{ feature[1] }}
              </p>
            </div>
          </div>
          <button class="product__see-all-features">
            {{ translations.trnsl_all_specifications }}
          </button>
        </div>
        <div class="product__configurations">
          <div :key="index" v-for="({title, option, values}, index) in configurations" class="product__configuration">
            <div class="product__configuration-name">
              {{ title }}:
            </div>
            <div class="product__configuration-options">
              <label :key="index" v-for="(option, index) in values" class="product__configuration-value">
                <input :name="title" :value="option" class="product__configuration-radio" type="radio">
                <span class="product__configuration-radio-custom">{{ option }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="product__prices">
          <p class="product__price-range">
            {{ `от ${(new Intl.NumberFormat('ru-RU')).format(priceRange[0])} до ${(new Intl.NumberFormat('ru-RU')).format(priceRange[1])} руб.` }}
          </p>
          <button class="product__see-all-prices">
            {{ `${translations.trnsl_all_specifications}: ${foundOffers}` }}
          </button>
        </div>
      </div>
    </div>
    <div class="product-details">
      <div class="product-navigation">
        <a
          :key="index"
          :class="{ 'product-navigation__link--active': activeTabName === name }"
          v-for="({title, name, amount}, index) in productData && productData.tabs"
          @click.prevent="setActiveTabName(name)"
          href="#"
          class="product-navigation__link"
        >
          {{ title }} <span v-if="amount" class="product-navigation__link--regular-weight">({{ amount }})</span>
        </a>
      </div>

      <!-- Vendors offer -->
      <div v-if="displayContents('vendor-offers')" class="product-similars">
        <div :key="index" v-for="({product, company, delivery}, index) in productData && productData.tabs[0].data" class="shop-offer-card">
          <div class="shop-offer-card__shop-details">
            <div class="shop-offer-card__logo">
              <img :alt="company.name" src="https://i.imgur.com/8wHOoYE.jpg" class="shop-offer-card__logo-img">
            </div>
            <div class="shop-offer-card__data">
              <h3 class="shop-offer-card__name">
                {{ company.name }}
              </h3>
              <p class="shop-offer-card__rating">
                <span class="shop-offer-card__stars">
                  <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"><g transform="translate(-465.736 -1070)"><g transform="translate(-846.264 886)"><g transform="translate(1312 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1331 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1350 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1388 184)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /></g><g transform="translate(1369 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g></g></g></svg>
                </span>
                {{ company.reviews }} {{ translations.trnsl_feedbacks }}
              </p>
              <p class="shop-offer-card__location">
                {{ translations.trnsl_company_from }}: {{ company.location }}
              </p>
              <a href="#" class="shop-offer-card__all-offers">{{ translations.trnsl_all_offers_seller }}</a>
            </div>
          </div>
          <div class="shop-offer-card__delivery-details">
            <h3 class="shop-offer-card__name">
              {{ translations.trnsl_send_product }}:
            </h3>
            <p class="shop-offer-card__mini-row">
              {{ translations.trnsl_samovizov }}
            </p>
            <p class="shop-offer-card__mini-row">
              {{ translations.trnsl_send_in_my_city }}: {{ `${delivery.duration[0]}-${delivery.duration[1]}` }} {{ translations.trnsl_days }}
            </p>
            <p class="shop-offer-card__mini-row">
              {{ translations.trnsl_costs_send }}: {{ `${delivery.cost} ${delivery.currency}` }}
            </p>
          </div>
          <div class="shop-offer-card__actions">
            <p class="shop-offer-card__price">
              {{ `${(new Intl.NumberFormat('ru-RU')).format(product.price)} ${product.currency}` }}
            </p>
            <button class="shop-offer-card__chat">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.343" height="16" viewBox="0 0 20.343 16"><path d="M16.6,16.306c0-3.2-3.723-5.809-8.3-5.809S0,13.1,0,16.306c0,1.818,1.169,3.485,3.214,4.594a11.091,11.091,0,0,1-1.6,3.709.185.185,0,0,0,.142.3h.017a10.75,10.75,0,0,0,6.136-2.8c.128,0,.257.006.387.006C12.876,22.114,16.6,19.508,16.6,16.306Z" transform="translate(0 -10.497)" fill="#3b4b68" /><path d="M53.1,27.04c0-2.13-1.648-3.995-4.1-5.005a5.414,5.414,0,0,1,1.45,3.594c0,3.677-4.11,6.67-9.162,6.67h-.009a11.3,11.3,0,0,0,3.519.549c.13,0,.259,0,.387-.007a10.748,10.748,0,0,0,6.137,2.8h.017a.185.185,0,0,0,.142-.3,11.088,11.088,0,0,1-1.6-3.709C51.927,30.526,53.1,28.858,53.1,27.04Z" transform="translate(-32.753 -19.645)" fill="#3b4b68" /></svg>
            </button>
            <button @click="addToCart({ slug, companyName: company.name, price: product.price })" class="shop-offer-card__cart">
              {{ translations.trnsl_in_cart }}
            </button>
          </div>
        </div>
      </div>

      <!-- Features -->
      <div v-if="displayContents('features')" class="features">
        <div class="features__container">
          <div :key="index" v-for="({title, features}, index) in productData && productData.tabs[1].data" class="features__section">
            <p class="features__title">
              {{ title }}
            </p>
            <div :key="index" v-for="(feature, index) in features" class="features__data">
              <p class="features__column features__name">
                <span>{{ feature[0] }}</span>
              </p>
              <p class="features__column features__value">
                <span>{{ feature[1] }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div v-if="displayContents('description')" class="description">
        <div class="description__container">
          <div :key="index" v-for="(textContent, index) in productData && productData.tabs[2].data" class="description__part">
            <h3 v-if="textContent.title" class="description__title">
              {{ textContent.title }}
            </h3>
            <p :key="index" v-for="(paragraph, index) in textContent.paragraphs" class="description__paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- Product reviews -->
      <div v-if="displayContents('product-reviews')" class="product-reviews">
        <div class="product-reviews__container">
          <div class="reviews">
            <div :key="index" v-for="({author, postPeriod, withPalermo, rating, review, commentaries}, index) in productData && productData.tabs[3].data" class="review">
              <div class="review__head">
                <div class="review__head-side">
                  <p class="review__author">
                    {{ author }}
                  </p>
                  <p class="review__post-period">
                    {{ postPeriod }}
                  </p>
                </div>
                <div class="review__head-side">
                  <p v-if="withPalermo" class="review__with-palermo">
                    <span class="review__with-palermo-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="Path_1231" data-name="Path 1231" d="M4.8,12.8a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,4.8,12.8ZM0,0V1.6H1.6L4.48,7.68,3.36,9.6a2.842,2.842,0,0,0-.16.8A1.6,1.6,0,0,0,4.8,12h9.6V10.4H5.12a.172.172,0,0,1-.16-.16v-.08L5.68,8.8H11.6A1.459,1.459,0,0,0,12.96,8l2.88-5.2A.44.44,0,0,0,16,2.4a.756.756,0,0,0-.8-.8H3.36L2.64,0ZM12.8,12.8a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,12.8,12.8Z" fill="#3b4b68" />
                      </svg>
                    </span>
                    {{ translations.trnsl_producted_bought_on_palermo }}
                  </p>
                  <div class="review__rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"><g transform="translate(-465.736 -1070)"><g transform="translate(-846.264 886)"><g transform="translate(1312 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1331 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1350 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g><g transform="translate(1388 184)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /></g><g transform="translate(1369 171.25)"><g transform="translate(0 12.75)"><path d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /></g></g></g></g></svg>
                  </div>
                </div>
              </div>
              <div class="review__body">
                <div class="review__body-section">
                  <p class="review__body-section-paragraph">
                    <span v-if="review && review.advantages" class="review__body-section-title">{{ translations.trnsl_pozitive }}: </span>
                    {{ review.advantages }}
                  </p>
                  <p class="review__body-section-paragraph">
                    <span v-if="review && review.disadvantages" class="review__body-section-title">{{ translations.trnsl_nedostatki }}: </span>
                    {{ review.disadvantages }}
                  </p>
                  <p class="review__body-section-paragraph">
                    <span v-if="review && review.comment" class="review__body-section-title">{{ translations.trnsl_comment_user }}: </span>
                    {{ review.comment }}
                  </p>
                  <button class="review__comment-button">
                    {{ translations.trnsl_comment }}
                  </button>
                </div>
              </div>
              <div v-if="commentaries && commentaries.length" class="review__commentaries">
                <div :key="index" v-for="({author, postPeriod, content}, index) in commentaries" class="review__comment">
                  <div class="review__comment-head">
                    <p class="review__comment-author">
                      {{ author }}
                    </p>
                    <p class="review__comment-post-period">
                      {{ postPeriod }}
                    </p>
                  </div>
                  <p class="review__comment-content">
                    {{ content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="rating-data">
            <h3 class="rating-data__title">
              {{ translations.trnsl_rate_product }}: {{ productData.productRating }} <span class="rating-data__title--gray">{{ translations.trnsl_from }} 5</span>
            </h3>
            <div class="rating-data__list">
              <div class="rating-data__list-item">
                <span class="rating-data__rating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"> <g id="Group_10134" data-name="Group 10134" transform="translate(-1312 -184)"> <g id="mark-as-favorite-star" transform="translate(1312 171.25)"> <g id="star" transform="translate(0 12.75)"> <path id="Path_1215" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-2" data-name="mark-as-favorite-star" transform="translate(1331 171.25)"> <g id="star-2" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-2" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-3" data-name="mark-as-favorite-star" transform="translate(1350 171.25)"> <g id="star-3" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-3" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="star-4" data-name="star" transform="translate(1388 184)"> <path id="Path_1215-4" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> <g id="mark-as-favorite-star-4" data-name="mark-as-favorite-star" transform="translate(1369 171.25)"> <g id="star-5" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-5" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> </g> </svg>
                </span>
                <div class="rating-data__rating-bar">
                  <div :style="{right: Math.abs(productData.ratingData.star5 / productData.tabs[3].amount * 100 - 100) + '%'}" class="rating-data__rating-bar-progress" />
                </div>
                <p class="rating-data__rating-amount">
                  {{ productData.ratingData.star5 }}
                </p>
              </div>
              <div class="rating-data__list-item">
                <span class="rating-data__rating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"> <g id="Group_10133" data-name="Group 10133" transform="translate(-1312 -184)"> <g id="mark-as-favorite-star" transform="translate(1312 171.25)"> <g id="star" transform="translate(0 12.75)"> <path id="Path_1215" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-2" data-name="mark-as-favorite-star" transform="translate(1331 171.25)"> <g id="star-2" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-2" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-3" data-name="mark-as-favorite-star" transform="translate(1350 171.25)"> <g id="star-3" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-3" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="star-4" data-name="star" transform="translate(1388 184)"> <path id="Path_1215-4" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> <g id="mark-as-favorite-star-4" data-name="mark-as-favorite-star" transform="translate(1369 171.25)"> <g id="star-5" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-5" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> </g> </svg>
                </span>
                <div class="rating-data__rating-bar">
                  <div :style="{right: Math.abs(productData.ratingData.star4 / productData.tabs[3].amount * 100 - 100) + '%'}" class="rating-data__rating-bar-progress" />
                </div>
                <p class="rating-data__rating-amount">
                  {{ productData.ratingData.star4 }}
                </p>
              </div>
              <div class="rating-data__list-item">
                <span class="rating-data__rating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"> <g id="Group_10132" data-name="Group 10132" transform="translate(-1312 -184)"> <g id="mark-as-favorite-star" transform="translate(1312 171.25)"> <g id="star" transform="translate(0 12.75)"> <path id="Path_1215" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-2" data-name="mark-as-favorite-star" transform="translate(1331 171.25)"> <g id="star-2" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-2" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-3" data-name="mark-as-favorite-star" transform="translate(1350 171.25)"> <g id="star-3" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-3" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="star-4" data-name="star" transform="translate(1388 184)"> <path id="Path_1215-4" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> <g id="mark-as-favorite-star-4" data-name="mark-as-favorite-star" transform="translate(1369 171.25)"> <g id="star-5" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-5" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> </g> </svg>
                </span>
                <div class="rating-data__rating-bar">
                  <div :style="{right: Math.abs(productData.ratingData.star3 / productData.tabs[3].amount * 100 - 100) + '%'}" class="rating-data__rating-bar-progress" />
                </div>
                <p class="rating-data__rating-amount">
                  {{ productData.ratingData.star3 }}
                </p>
              </div>
              <div class="rating-data__list-item">
                <span class="rating-data__rating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"> <g id="Group_10131" data-name="Group 10131" transform="translate(-1312 -184)"> <g id="mark-as-favorite-star" transform="translate(1312 171.25)"> <g id="star" transform="translate(0 12.75)"> <path id="Path_1215" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-2" data-name="mark-as-favorite-star" transform="translate(1331 171.25)"> <g id="star-2" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-2" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-3" data-name="mark-as-favorite-star" transform="translate(1350 171.25)"> <g id="star-3" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-3" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> <g id="star-4" data-name="star" transform="translate(1388 184)"> <path id="Path_1215-4" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> <g id="mark-as-favorite-star-4" data-name="mark-as-favorite-star" transform="translate(1369 171.25)"> <g id="star-5" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-5" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> </g> </svg>
                </span>
                <div class="rating-data__rating-bar">
                  <div :style="{right: Math.abs(productData.ratingData.star2 / productData.tabs[3].amount * 100 - 100) + '%'}" class="rating-data__rating-bar-progress" />
                </div>
                <p class="rating-data__rating-amount">
                  {{ productData.ratingData.star2 }}
                </p>
              </div>
              <div class="rating-data__list-item">
                <span class="rating-data__rating-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="92.842" height="16" viewBox="0 0 92.842 16"> <g id="Group_10130" data-name="Group 10130" transform="translate(-1312 -184)"> <g id="mark-as-favorite-star" transform="translate(1312 171.25)"> <g id="star" transform="translate(0 12.75)"> <path id="Path_1215" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#3b4b68" /> </g> </g> <g id="mark-as-favorite-star-2" data-name="mark-as-favorite-star" transform="translate(1331 171.25)"> <g id="star-2" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-2" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> <g id="mark-as-favorite-star-3" data-name="mark-as-favorite-star" transform="translate(1350 171.25)"> <g id="star-3" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-3" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> <g id="star-4" data-name="star" transform="translate(1388 184)"> <path id="Path_1215-4" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> <g id="mark-as-favorite-star-4" data-name="mark-as-favorite-star" transform="translate(1369 171.25)"> <g id="star-5" data-name="star" transform="translate(0 12.75)"> <path id="Path_1215-5" data-name="Path 1215" d="M8.421,25.611l5.2,3.139-1.377-5.919,4.594-3.981-6.056-.52L8.421,12.75,6.056,18.331,0,18.85l4.594,3.981L3.217,28.75Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> </g> </svg>
                </span>
                <div class="rating-data__rating-bar">
                  <div :style="{right: Math.abs(productData.ratingData.star2 / productData.tabs[3].amount * 100 - 100) + '%'}" class="rating-data__rating-bar-progress" />
                </div>
                <p class="rating-data__rating-amount">
                  {{ productData.ratingData.star2 }}
                </p>
              </div>
            </div>
            <button v-on:click="show()" class="rating-data__rate-button">
              {{ translations.trnsl_give_feedback }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductReviewModal from '~/components/modals/ProductReview'

export default {
  name: 'Product',
  props: {
    configurations: Array,
    features: Array,
    foundOffers: Number,
    isInStock: Boolean,
    numberOfReviews: Number,
    previewImages: Array,
    priceRange: Array,
    productData: Object,
    rating: Number,
    slug: String,
    // method: Function,
    title: String,
    thumbnailUrl: String,
    vendorCode: String
  },
  data () {
    return {
      activeTabName: null
    }
  },
  watch: {
    previewImages () {
      for (let i = 0; i < document.querySelectorAll('#product-carousel .owl-dot').length; i++) {
        document.getElementsByClassName('owl-dot')[i].innerHTML = `<div class="product__preview-slider-image" style="background-image: url(${this.previewImages[i]})">`
      }
    }
  },
  mounted () {
    this.activeTabName = this.productData.tabs[0].name
    for (let i = 0; i < document.querySelectorAll('#product-carousel .owl-dot').length; i++) {
      document.getElementsByClassName('owl-dot')[i].innerHTML = `<div class="product__preview-slider-image" style="background-image: url(${this.previewImages[i]})">`
    }
  },
  computed: {
    ...mapGetters({
      translations: 'app/translations'
    })
  },
  methods: {
    setActiveTabName (name) {
      this.activeTabName = name
    },
    displayContents (name) {
      return this.activeTabName === name
    },
    show () {
      this.$modal.show(ProductReviewModal, {
        productName: this.title
      }, {
        height: 615,
        width: 815
      })
    },
    hide () {
      this.$modal.hide(ProductReviewModal)
    },
    addToCart (index) {
      this.$store.commit('shopCart/ADD_PRODUCT', index)
    }
  }
}
</script>

<style>
  .product-wrapper {
    width: 100%;
  }
  .product {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    width: 100%;
  }
  #product-carousel .owl-carousel {
    position: relative;
  }
  #product-carousel .owl-carousel .owl-stage-outer {
    margin-bottom: 15px;
  }
  #product-carousel .owl-carousel .owl-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  #product-carousel .owl-carousel .owl-nav button.owl-prev {
    position: relative;
    top: 0;
  }
  #product-carousel .owl-carousel .owl-nav button.owl-prev,
  #product-carousel .owl-carousel .owl-nav button.owl-next {
    background-color: transparent;
    margin: 0;
  }
  #product-carousel .owl-theme .owl-dots {
    display: flex;
    justify-content: flex-start;
  }
  #product-carousel .owl-theme .owl-dots .owl-dot {
    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 5px;
    display: inline-flex;
    height: 70px;
    margin-right: 15px;
    width: 70px;
  }
  #product-carousel .owl-theme .owl-dots .owl-dot:last-child {
    margin-right: 0;
  }
  #product-carousel .owl-theme .owl-dots .owl-dot.active {
    border: 2px solid #8E9BAD;
  }
  #product-carousel .product__preview-slider-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
  }
  .product__images {
    height: 580px;
    width: 495px;
  }
  .product__preview {
    background-color: #ffffff;
    border-radius: 5px;
    height: 495px;
    padding: 50px;
    width: 100%;
  }
  .product__preview-img {
    border-radius: 5px;
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
  .product__preview-slider-images {
    display: flex;
  }
  .product__preview-slider-image-wrapper {
    background-color: #ffffff;
    border-radius: 5px;
    height: 70px;
    margin-right: 15px;
    width: 70px;
  }
  .product__preview-slider-image-wrapper:last-child {
    margin-right: 0;
  }
  .product__preview-slider-image {
    border-radius: 5px;
    cursor: pointer;
    height: 66px;
    object-fit: cover;
    padding: 2px;
    width: 100%;
  }
  .product__information {
    background-color: #ffffff;
    height: 580px;
    width: 750px;
  }
  .product__head {
    border-bottom: 1px solid #CED6E0;
    padding: 25px 30px 30px;
  }
  .product__name {
    color: #3B4B68;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 19px;
  }
  .product__meta-information {
    align-items: center;
    display: flex;
  }
  .product__meta-data {
    align-items: center;
    color: #3D4A67;
    display: flex;
    font-size: 12px;
    margin-right: 30px;
  }
  .product__is-in-stock {
    background-color: #57E0BB;
    border-radius: 50%;
    display: inline-block;
    height: 5px;
    margin-right: 7px;
    width: 5px;
  }
  .product__favourite {
    align-items: center;
    background-color: transparent;
    border: none;
    color: #3D4A67;
    cursor: pointer;
    display: flex;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
  }
  .product__favourite:focus > .product__favourite-icon > svg path,
  .product__favourite:hover > .product__favourite-icon > svg path  {
    fill: #F02C5A;
  }
  .product__favourite-icon {
    display: inline-flex;
    margin-right: 10px;
  }
  .product__favourite-icon > svg path {
    transition: fill 150ms ease;
  }
  .product__rating-icon {
    display: inline-flex;
    margin-right: 10px;
  }
  .product__features {
    border-bottom: 1px solid #CED6E0;
    color: #3D4A67;
    padding: 25px 30px 35px;
  }
  .product__feature {
    display: flex;
    margin-bottom: 7px;
  }
  .product__feature:last-child {
    margin-bottom: 16px;
  }
  .product__feature-property {
    padding-right: 20px;
    width: 190px;
  }
  .product__see-all-features,
  .product__see-all-prices {
    background-color: transparent;
    border: none;
    color: #005BFF;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    padding: 0;
  }
  .product__see-all-features:focus,
  .product__see-all-prices:focus,
  .product__see-all-features:hover,
  .product__see-all-prices:hover {
    text-decoration: underline;
  }
  .product__configurations {
    border-bottom: 1px solid #CED6E0;
    padding: 25px 30px 30px;
  }
  .product__configuration {
    align-items: center;
    display: flex;
    margin-bottom: 20px;
  }
  .product__configuration:last-child {
    margin-bottom: 0;
  }
  .product__configuration-name {
    color: #3B4B68;
    font-size: 14px;
    font-weight: 700;
    margin-right: 23px;
  }
  .product__configuration-options {
    display: flex;
  }
  .product__configuration-value {
    cursor: pointer;
    margin-right: 10px;
    position: relative;
  }
  .product__configuration-radio {
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }
  .product__configuration-radio:checked + .product__configuration-radio-custom {
    background-color: #3B4B68;
    border: 1px solid #3B4B68;
    color: #ffffff;
  }
  .product__configuration-radio-custom {
    background-color: transparent;
    border: 1px solid #8E9BAD;
    border-radius: 5px;
    color: #3B4B68;
    display: inline-flex;
    font-size: 12px;
    padding: 5px 7px;
  }
  .product__prices {
    padding: 25px 30px 0;
  }
  .product__price-range {
    color: #3B4B68;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 17px;
  }
  .product__see-all-prices {
    margin-top: 0;
  }
  .product-details {
    margin-bottom: 5px;
  }
  .product-navigation {
    margin-bottom: 30px;
    padding-bottom: 8px;
  }
  .product-navigation__link {
    color: #3B4B68;
    font-size: 14px;
    font-weight: 700;
    margin-right: 40px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }
  .product-navigation__link--active {
    position: relative;
  }
  .product-navigation__link--active::after {
    background-color: #3B4B68;
    bottom: -8px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    width: 30px;
  }
  .product-navigation__link:last-child {
    margin-right: none;
  }
  .product-navigation__link--regular-weight {
    font-weight: 400;
  }

  .shop-offer-card {
    background-color: #ffffff;
    border-radius: 5px;
    display: flex;
    margin-bottom: 20px;
    padding: 30px;
  }

  .shop-offer-card__shop-details {
    display: flex;
    width: 40%;
  }

  .shop-offer-card__logo {
    height: 100px;
    margin-right: 30px;
    width: 100px;
  }

  .shop-offer-card__logo-img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }

  .shop-offer-card__name {
    color: #3B4B68;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .shop-offer-card__rating {
    align-items: center;
    color: #3B4B68;
    display: flex;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .shop-offer-card__stars {
    display: inline-flex;
    margin-right: 9px;
  }

  .shop-offer-card__location {
    color: #3B4B68;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .shop-offer-card__all-offers {
    color: #1769FF;
    text-decoration: none;
  }

  .shop-offer-card__all-offers:focus,
  .shop-offer-card__all-offers:hover {
    text-decoration: underline;
  }

  .shop-offer-card__delivery-details {
    width: 27%;
  }

  .shop-offer-card__mini-row {
    color: #3B4B68;
    margin-bottom: 10px;
  }

  .shop-offer-card__mini-row:last-child {
    margin-bottom: 0;
  }

  .shop-offer-card__actions {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }

  .shop-offer-card__price {
    color: #3B4B68;
    font-size: 24px;
    font-weight: 700;
    margin-right: 50px;
  }

  .shop-offer-card__chat {
    align-items: center;
    background-color: #E0E4ED;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    display: inline-flex;
    height: 40px;
    justify-content: center;
    margin-right: 15px;
    padding: 0;
    width: 40px;
  }

  .shop-offer-card__cart {
    background-color: #E0E4ED;
    border: none;
    border-radius: 20px;
    color: #3B4B68;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    padding: 0 40px;
    text-align: center;
  }

  .features {
    background-color: #ffffff;
    padding: 30px;
    width: 100%;
  }

  .features__section {
    margin-bottom: 30px;
  }

  .features__title {
    color: #3B4B68;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .features__data {
    align-items: flex-start;
    color: #3B4B68;
    display: flex;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .features__column {
    overflow: hidden;
    position: relative;
    width: 40%;
  }

  .features__column:first-child::before {
    border-bottom: 1px dashed #CED6E0;
    bottom: 4px;
    content: '';
    left: 0;
    position: absolute;
    width: calc(100% - 6px);
    z-index: 0;
  }

  .features__column:last-child {
    width: 55%;
  }

  .features__column > span {
    background-color: #ffffff;
    padding-right: 6px;
    position: relative;
    z-index: 1;
  }

  .description {
    background-color: #ffffff;
    padding: 30px;
    width: 100%;
  }

  .description__part {
    color: #3B4B68;
    margin-bottom: 35px;
  }

  .description__title {
    margin-bottom: 15px;
  }

  .description__title {
    font-size: 16px;
    font-weight: 700;
  }

  .description__paragraph {
    font-size: 14px;
    line-height: 24px;
  }

  .product-reviews__container {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
  }

  .reviews {
    background-color: #ffffff;
    width: 920px;
  }

  .review {
    border-bottom: 1px solid #CED6E0;
    padding: 30px 30px 70px;
  }

  .review:last-child {
    border-bottom: none;
  }

  .review__head {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .review__head-side {
    align-items: center;
    display: flex;
  }

  .review__author,
  .review__comment-author {
    color: #3B4B68;
    font-size: 14px;
    font-weight: 700;
    margin-right: 12px;
  }

  .review__post-period,
  .review__comment-post-period {
    color: #8E9BAD;
    font-size: 12px;
  }

  .review__with-palermo {
    align-items: center;
    color: #3B4B68;
    display: flex;
    font-size: 12px;
    margin-right: 30px;
  }

  .review__with-palermo-icon {
    display: inline-flex;
    margin-right: 10px;
  }

  .review__rating {
    display: inline-flex;
  }

  .review__body-section-title {
    font-weight: 700;
  }

  .review__body-section-paragraph,
  .review__comment-content {
    color: #3B4B68;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
  }

  .review__comment-button {
    background-color: transparent;
    border: none;
    color: #3B4B68;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    padding: 0;
  }

  .review__comment-button:focus,
  .review__comment-button:hover {
    text-decoration: underline;
  }

  .review__commentaries {
    padding: 20px 0 0 50px;
  }

  .review__comment {
    margin: 0 20px 30px 0;
  }

  .review__comment-head {
    align-items: center;
    display: flex;
    margin-bottom: 15px;
  }

  .review__comment-content {
    margin-bottom: 0;
  }

  .rating-data {
    background-color: #ffffff;
    padding: 30px 20px;
    width: 320px;
  }

  .rating-data__title {
    color: #3B4B68;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 23px;
  }

  .rating-data__title--gray {
    color: #8E9BAD;
  }

  .rating-data__list {
    margin-bottom: 50px;
  }

  .rating-data__list-item {
    align-items: center;
    display: flex;
    margin-bottom: 15px;
  }

  .rating-data__rating-icon {
    display: inline-flex;
    margin-right: 20px;
  }

  .rating-data__rating-bar {
    background-color: #CED6E0;
    border-radius: 2px;
    height: 4px;
    margin-right: auto;
    position: relative;
    width: 123px;
  }

  .rating-data__rating-bar-progress {
    background-color: #3B4B68;
    border-radius: 2px;
    bottom: 0;
    height: 4px;
    left: 0;
    position: absolute;
    top: 0;
  }

  .rating-data__rate-button {
    background-color: #CED6E0;
    border: none;
    border-radius: 20px;
    color: #3B4B68;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 40px;
    padding: 12px 0;
    text-transform: uppercase;
    width: 100%;
  }
</style>
