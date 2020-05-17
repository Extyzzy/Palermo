<template>
  <main
    ref="catalogView"
    class="main"
  >
    <div v-if="dataCatalog && dataCatalog.length" class="container">
      <BreadCrumbs :data="breadCrumbsData" />
      <h3 class="title-catalog">
        {{ filterTitle }}
      </h3>
      <div style="display: flex;">
        <div style="width: 225px">
          <div v-if="!data">
            Loading Filters...
          </div>
          <Facets
            v-if="data && data.length"
            @update="update"
            :data="data"
            :loading="loading"
          />
        </div>
        <div class="right-content-catalog">
          <div class="sort-catalog">
            Сортировать по:
            <span>популярности</span>
            <span>возрастанию цены</span>
            <span>убыванию цены</span>
          </div>

          <div v-if="dataCatalog && dataCatalog.length" class="cards">
            <nuxt-link
              v-for="{ id, image, lowest_price, slug, translations } in dataCatalog"
              :key="id"
              :to="localePath({ name: 'product-slug', params: { slug }, query: { id } })"
              class="no-underline"
            >
              <ProductCard
                :imgSrc="`https://backend-dev.palermo.md/${image}`"
                :from="true"
                :price="lowest_price"
                :title="translations"
                currency="руб"
              />
            </nuxt-link>
          </div>

          <template v-if="pagesNum">
            <div class="page__numbers">
              <button
                v-if="pagination.previous"
                @click="changeActivePage(activePageNum - 1)"
                class="page__number page__number-chevron"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8.108" viewBox="0 0 5 8.108"> <path id="Path_6" data-name="Path 6" d="M59.6,0l-.95.946,3.108,3.108L58.65,7.162l.946.946L63.65,4.054Z" transform="translate(63.65 8.108) rotate(180)" fill="#3b4b68" /> </svg>
              </button>
              <button
                v-if="pagination.initial"
                @click="changeActivePage(1)"
                class="page__number"
              >
                {{ 1 }}
              </button>
              <button
                v-if="pagination.initial"
                class="page__number"
                disabled
              >
                {{ '...' }}
              </button>
              <button @click="changeActivePage(index)" :class="{ 'page__number--active': index === activePageNum }" :key="index" v-for="index in pagination.paginationPages" class="page__number">
                {{ index }}
              </button>
              <button
                v-if="pagination.last"
                class="page__number"
                disabled
              >
                {{ '...' }}
              </button>
              <button
                v-if="pagination.last"
                @click="changeActivePage(pagesNum)"
                class="page__number"
              >
                {{ pagesNum }}
              </button>
              <button
                v-if="pagination.next"
                @click="changeActivePage(activePageNum + 1)"
                class="page__number page__number-chevron"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8.108" viewBox="0 0 5 8.108"> <path id="Path_6" data-name="Path 6" d="M59.6,0l-.95.946,3.108,3.108L58.65,7.162l.946.946L63.65,4.054Z" transform="translate(-58.65)" fill="#3b4b68" /> </svg>
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div
      v-if="dataCatalog && dataCatalog.length === 0"
      class="no-items"
    >
      <h2 class="no-items__title">
        Здесь, пока что, ничего нет
      </h2>
      <p class="no-item__paragraph">
        Но не забудьте заглянуть через некоторое время.
      </p>
    </div>
  </main>
</template>

<script>
import config from '~/config.js'
import Facets from '~/components/facets/Facets.vue'
import BreadCrumbs from '~/components/BreadCrumbs.vue'
import ProductCard from '~/components/ProductCard'

export default {
  name: 'CategoryList',
  components: {
    Facets,
    ProductCard,
    BreadCrumbs
  },
  data () {
    return {
      activePageNum: parseInt(this.$nuxt._route.query.page) || 1,
      configData: config,
      currentSlugCategory: this.$nuxt._route.params.slug,
      data: null,
      dataCatalog: null,
      breadCrumbsData: [],
      filterTitle: '',
      loading: false,
      tempPagesNum: 15,
      pagesNum: 0
    }
  },
  computed: {
    pagination () {
      const { activePageNum, pagesNum } = this
      const paginationStructure = {
        paginationPages: []
      }

      // Previous page button
      paginationStructure.previous = activePageNum > 1

      // Initial page
      paginationStructure.initial = activePageNum > 4

      // Last page
      paginationStructure.last = pagesNum - activePageNum > 3

      // Next page button
      paginationStructure.next = activePageNum < pagesNum

      // Show the first page button in case that the active page is the 4th one
      if (activePageNum === 4) {
        paginationStructure.paginationPages.push(1)
      }

      // Previous 2 page buttons
      for (let i = activePageNum - 2; i < activePageNum; i++) {
        if (i > 0) {
          paginationStructure.paginationPages.push(i)
          paginationStructure.previous = true
        } else {
          paginationStructure.previous = false
        }
      }

      // Push current page
      paginationStructure.paginationPages.push(activePageNum)

      // Next 2 page buttons
      for (let i = activePageNum + 1; i < activePageNum + 3; i++) {
        if (i <= pagesNum) {
          paginationStructure.paginationPages.push(i)
        } else {
          if (activePageNum !== 4) {
            paginationStructure.next = false
          }
          break
        }
      }

      // Show the last page button in case that the active page is the (lastPage - 3) one
      if (activePageNum + 3 === pagesNum) {
        paginationStructure.paginationPages.push(pagesNum)
      }

      return paginationStructure
    }
  },
  watch: {
    $route () {
      if (this.$nuxt._route.params.slug) {
        this.fetchSidebar()
        this.fetchCatalog()
        this.fetchBreadCrumbs()
      }
    }
  },
  created () {
    console.log('current page', this.activePageNum)
    this.fetchSidebar()
    this.fetchCatalog()
    this.fetchBreadCrumbs()
  },
  methods: {
    async fetchBreadCrumbs () {
      const breadCrumbs = (await this.$axios.$get(config.apiUrl + `breadcrumbs/catalog/${this.$nuxt._route.params.slug}?lang=${this.$i18n.locale}`)).data
      console.info('here')
      this.breadCrumbsData = breadCrumbs.map((data) => {
        return {
          title: data.title,
          url: this.localePath({ name: 'catalog-slug', params: { slug: data.url } })
        }
      })

      delete this.breadCrumbsData[this.breadCrumbsData.length - 1].url
    },
    async fetchSidebar () {
      const sidebar = await this.$axios.$get(config.apiUrl + `filter?lang=${this.$i18n.locale}&category=${this.$nuxt._route.params.slug}`)
      this.data = sidebar.data
      this.filterTitle = sidebar.filter_title
    },
    async fetchCatalog () {
      this.dataCatalog = null
      const fetchedCatalog = await this.$axios.$get(config.apiUrl + `catalog/${this.$nuxt._route.params.slug}?lang=${this.$i18n.locale}&page=${this.activePageNum}`)
      this.dataCatalog = fetchedCatalog.data.data
      this.pagesNum = fetchedCatalog.data.last_page
    },
    changeActivePage (pageNumber) {
      this.activePageNum = pageNumber
      const query = { ...this.$nuxt._route.query }

      if (this.activePageNum !== 1) {
        this.$router.push({ query: { ...query, page: this.activePageNum } })
      } else if (query.hasOwnProperty('page')) {
        delete query.page
        this.$router.push({ query: { ...query } })
      }

      this.$refs.catalogView.scrollIntoView()
    }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 200px;
}
.no-items {
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 20px;
  width: 100%;
}
.no-items__title {
  color: #3B4B68;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}
.no-item__paragraph {
    color: #3B4B68;
  font-size: 12px;
  font-weight: 400;
}
.right-content-catalog {
  margin-left: 30px;
  width: 1005px;
}
.sort-catalog {
  margin-bottom: 30px;
  color: #3B4B68;
}
.sort-catalog span {
  margin-left: 10px;
}
.sort-catalog span:hover {
  color: #1769FF;
  cursor: pointer;
}
.container {
  width: 1260px;
  margin: 0 auto;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 35px;
  position: relative;
}
.cards > a:nth-child(4n) > div {
  margin-right: 0;
}
.titleCard {
  font-size: 12px;
  color: var(--var-txt-color-brand);
  font-weight: 300;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bottom {
  display: flex;
  flex-direction: column;
  height: 400px;
  line-height: 6em;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.bottom:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 8px 0 rgba(59, 75, 104, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.price {
  font-size: 18px;
  color: var(--var-txt-color-brand);
  font-weight: bold;
  padding-left: 10px;
}
.image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}
.main {
  background-color: #F6F8F9;
  padding-top: 20px;
}
.title-catalog {
  font-size: 20px;
  color: #3B4B68;
  margin-bottom: 30px;
}
.page__numbers {
  display: flex;
}
.page__number {
  background-color: #ffffff;
  border: 1px solid #8E9BAD;
  border-radius: 5px;
  color: #3B4B68;
  cursor: pointer;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  height: 30px;
  margin-right: 5px;
  outline: none;
  padding: 0;
  transition: background-color 150ms, border 150ms, color 150ms;
  width: 30px;
}
.page__number:not(:disabled):hover {
  background-color: #E0E4ED;
  border: 1px solid #E0E4ED;
  color: #3B4B68;
}
.page__number:disabled:hover {
  cursor: auto;
}
.page__number--active,
.page__number--active:hover {
  background-color: #8E9BAD;
  border: 1px solid #8E9BAD;
  color: #ffffff;
}
</style>
