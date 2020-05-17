<template>
  <main class="main-sub-category">
    <section class="sub-category">
      <div class="sub-category__container">
        <h2 class="sub-category__title">
          {{ category && category.short }}
        </h2>
        <div class="sub-category__content">
          <div class="sub-category-navigation">
            <h3 class="sub-category-navigation__title">
              Категории
            </h3>
            <ul class="sub-category-navigation__nav">
              <template v-if="category && category.children">
                <li
                  :key="`nav-${slug}`"
                  v-for="{ slug, translation, children } in category.children"
                  class="sub-category-navigation__item"
                >
                  <nuxt-link
                    :to="localePath({ path: children ? `/catalog/${slug}` : `/category-list/${slug}` })"
                    class="sub-category-navigation__link"
                  >
                    {{ translation }}
                  </nuxt-link>
                </li>
              </template>
            </ul>
          </div>
          <div class="sub-category-cards">
            <template v-if="category && category.children">
              <nuxt-link
                :key="`card-${slug}`"
                :to="localePath({ path: children ? `/catalog/${slug}` : `/category-list/${slug}` })"
                v-for="{ image, slug, translation, children } in category.children"
                class="category-card"
              >
                <div class="category-card__thumnail">
                  <img
                    :alt="translation"
                    :src="`https://backend-dev.palermo.md/${image}`"
                    class="category-card__image"
                  >
                </div>
                <h4 class="category-card__title">
                  {{ translation }}
                </h4>
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
      <Cards
        :data="cardsData"
        :rightMessage="'show more'"
        name="Популярные товары"
      />
      <Cards
        :data="cardsData"
        :rightMessage="'show more'"
        name="Скидки и акции"
      />
    </section>
  </main>
</template>

<script>
import config from '@/config'
import cardsData from '@/template/cards'

import Cards from '@/components/Cards.vue'

export default {
  name: 'Catalog',
  components: {
    Cards
  },
  data () {
    return {
      cardsData,
      category: null
    }
  },
  mounted () {
    console.log('PAGE :: _category-slug')
    this.fetchCategory()
  },
  methods: {
    async fetchCategory () {
      const data = (await this.$axios.$get(config.apiUrl + `sub-catalog/${this.$nuxt._route.params.slug}?lang=${this.$i18n.locale}`)).data
      this.category = data
    }
  }
}
</script>

<style scoped>
.main-sub-category {
  background-color: #F6F8F9;
}

.sub-category {
  padding: 20px 0 150px;
}

.sub-category__container {
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 20px;
}

.sub-category__title {
  color: #3B4B68;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
}

.sub-category__content {
  align-items: flex-start;
  display: flex;
}

.sub-category-navigation__title {
  color: #3B4B68;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
}

.sub-category-navigation__nav {
  list-style-type: none;
  margin-right: 60px;
  padding: 0;
  width: 195px;
}

.sub-category-navigation__item:not(:last-child) {
  margin-bottom: 10px;
}

.sub-category-navigation__link {
  color: #3B4B68;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
}

.sub-category-navigation__link:focus,
.sub-category-navigation__link:hover {
  text-decoration: underline;
}

.sub-category-cards {
  display: flex;
  flex-wrap: wrap;
  /* padding-bottom: 30px; */
}

.category-card {
  margin: 0 15px 65px 0;
  text-decoration: none;
  width: 155px;
}

.category-card:nth-child(6n) {
  margin: 0 0 65px 0;
}

.category-card:hover .category-card__title {
  text-decoration: underline;
}

.category-card__thumnail {
  background-color: #FFFFFF;
  border-radius: 5px;
  height: 155px;
  margin-bottom: 15px;
  width: 155px;
}

.category-card__image {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.category-card__title {
  color: #3B4B68;
  font-size: 13px;
  font-weight: 400;
}
</style>
