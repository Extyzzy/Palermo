<template>
  <nav id="header" class="header-component">
    <div class="line">
      <div class="top-head container">
        <div class="location">
          <span class="animateFlicker">
            <svg id="location" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path id="Path_401" data-name="Path 401" d="M0,8H8v8h.889L16,0,0,7.111Z" fill="#8f99ab" />
            </svg>
          </span>
          <p class="my-city">
            {{ city ? city : 'My city' }}
          </p>
          <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="8.108" height="5" viewBox="0 0 8.108 5">
            <g id="downwards-arrow-key" transform="translate(0 -58.65)">
              <g id="keyboard-arrow-down" transform="translate(0 58.65)">
                <path id="Path_402" data-name="Path 402" d="M.946,58.65l3.108,3.108L7.162,58.65l.946.946L4.054,63.65,0,59.6Z" transform="translate(0 -58.65)" fill="#9097a9" />
              </g>
            </g>
          </svg>
          <div class="languages">
            <nuxt-link
              :class="{ activeLinkNavigator: $i18n.locale === 'ru'}"
              :to="switchLocalePath('ru')"
              class="languages__change-language"
            >
              RU
            </nuxt-link>
            <span class="languages__vertical-separator" />
            <nuxt-link
              :class="{ activeLinkNavigator: $i18n.locale === 'en'}"
              :to="switchLocalePath('en')"
              class="languages__change-language"
            >
              EN
            </nuxt-link>
            <span class="languages__vertical-separator" />
            <nuxt-link
              :class="{ activeLinkNavigator: $i18n.locale === 'ro'}"
              :to="switchLocalePath('ro')"
              class="languages__change-language"
            >
              RO
            </nuxt-link>
          </div>
        </div>
        <div class="info">
          <span>{{ translations.trnsl_buyer }}</span>
          <span>{{ translations.trnsl_seller }}</span>
          <span>{{ translations.trnsl_our }}</span>
        </div>
      </div>
    </div>
    <div class="secound-head">
      <div ref="searchBackground" class="second-head__background" />
      <div class="container-secound">
        <SearchDropdown
          ref="searchDropdown"
          v-if="isSearchFocused"
          :searchValue="searchValue"
          :suggestions="onSearchValueChange"
        />
        <div>
          <nuxt-link
            :to="localePath('index')"
            class="logo-wrapper"
          >
            <h1 class="logo">
              <span class="name-logo">Palermo</span>shopping
            </h1>
          </nuxt-link>
        </div>
        <div class="search">
          <input
            @input="showFocuslessOverlay"
            @focus="showFocuslessOverlay"
            @blur="hideFocuslessOverlay"
            v-model="searchValue"
            v-bind:placeholder="$t('general.input')"
            autocomplete="off"
            spellcheck="false"
            class="search-input"
            type="search"
            name="q"
          >
          <svg
            id="search"
            class="icon-search"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path id="Path_400" data-name="Path 400" d="M11.429,10.057H10.7l-.274-.274a5.723,5.723,0,0,0,1.463-3.84,5.943,5.943,0,1,0-5.943,5.943,5.723,5.723,0,0,0,3.84-1.463l.274.274v.731L14.629,16,16,14.629Zm-5.486,0a4.114,4.114,0,1,1,4.114-4.114A4.1,4.1,0,0,1,5.943,10.057Z" fill="#9097a9" />
          </svg>
        </div>
        <div class="right-content">
          <div
            v-on-clickaway="away"
            class="button-container"
          >
            <button
              @click="showProfileDropdown"
              class="buttons my-profile-button"
            >
              <svg
                id="user-shape_1_"
                data-name="user-shape (1)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <g id="person">
                  <path id="Path_403" data-name="Path 403" d="M8,8A4,4,0,1,0,4,4,4.012,4.012,0,0,0,8,8Zm0,2c-2.7,0-8,1.3-8,4v2H16V14C16,11.3,10.7,10,8,10Z" fill="#8f99ab" />
                </g>
              </svg>
              {{ $auth.loggedIn ? $auth.user.name : translations.trnsl_myProfile }}
            </button>
            <div
              v-show="isShowingProfileDropdown"
              class="button-container__dropdown"
            >
              <div v-if="$auth.loggedIn" class="button-container__dropdown-list">
                <button @click.prevent class="button-container__dropdown-list-item">
                  {{ translations.trnsl_history_orders }}
                </button>
                <button @click.prevent class="button-container__dropdown-list-item">
                  {{ translations.trnsl_personal_data }}
                </button>
                <button @click.prevent class="button-container__dropdown-list-item">
                  {{ translations.trnsl_password }}
                </button>
                <button @click.prevent="logOut" class="button-container__dropdown-list-item">
                  {{ translations.trnsl_exit }}
                </button>
              </div>
              <div v-else class="button-container__dropdown-container">
                <button @click="show" class="button-container__dropdown-button">
                  {{ translations.trnsl_login }}
                </button>
                <button @click="showRegistration" class="button-container__dropdown-button">
                  {{ translations.trnsl_create_account }}
                </button>
              </div>
            </div>
          </div>
          <div class="buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.343"
              height="16"
              viewBox="0 0 20.343 16"
            >
              <g id="chat-oval-filled-speech-bubbles" transform="translate(0 -10.497)">
                <g id="Group_9156" data-name="Group 9156" transform="translate(0 10.497)">
                  <path id="Path_395" data-name="Path 395" d="M16.6,16.306c0-3.2-3.723-5.809-8.3-5.809S0,13.1,0,16.306c0,1.818,1.169,3.485,3.214,4.594a11.091,11.091,0,0,1-1.6,3.709.185.185,0,0,0,.142.3h.017a10.75,10.75,0,0,0,6.136-2.8c.128,0,.257.006.387.006C12.876,22.114,16.6,19.508,16.6,16.306Z" transform="translate(0 -10.497)" fill="#8e9bad" />
                  <path id="Path_396" data-name="Path 396" d="M53.1,27.04c0-2.13-1.648-3.995-4.1-5.005a5.414,5.414,0,0,1,1.45,3.594c0,3.677-4.11,6.67-9.162,6.67h-.009a11.3,11.3,0,0,0,3.519.549c.13,0,.259,0,.387-.007a10.748,10.748,0,0,0,6.137,2.8h.017a.185.185,0,0,0,.142-.3,11.088,11.088,0,0,1-1.6-3.709C51.927,30.526,53.1,28.858,53.1,27.04Z" transform="translate(-32.753 -19.645)" fill="#8e9bad" />
                </g>
              </g>
            </svg>
            {{ translations.trnsl_chat }}
          </div>
          <div class="buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.391"
              height="16"
              viewBox="0 0 17.391 16"
            >
              <g id="favorite-heart-button" transform="translate(0 -20.4)">
                <g id="favorite" transform="translate(0 20.4)">
                  <path id="Path_397" data-name="Path 397" d="M8.7,36.4,7.478,35.183c-4.522-4-7.478-6.7-7.478-10A4.715,4.715,0,0,1,4.783,20.4,5.226,5.226,0,0,1,8.7,22.226,5.226,5.226,0,0,1,12.609,20.4a4.715,4.715,0,0,1,4.783,4.783c0,3.3-2.957,6-7.478,10Z" transform="translate(0 -20.4)" fill="#8e9bad" />
                </g>
              </g>
            </svg>
            {{ translations.trnsl_favorite }}
          </div>
          <nuxt-link :to="localePath('cart', $i18n.locale)" class="buttons">
            <svg
              id="shopping-cart_2_"
              data-name="shopping-cart (2)"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g id="shopping-cart">
                <path id="Path_1231" data-name="Path 1231" d="M4.8,12.8a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,4.8,12.8ZM0,0V1.6H1.6L4.48,7.68,3.36,9.6a2.842,2.842,0,0,0-.16.8A1.6,1.6,0,0,0,4.8,12h9.6V10.4H5.12a.172.172,0,0,1-.16-.16v-.08L5.68,8.8H11.6A1.459,1.459,0,0,0,12.96,8l2.88-5.2A.44.44,0,0,0,16,2.4a.756.756,0,0,0-.8-.8H3.36L2.64,0ZM12.8,12.8a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,12.8,12.8Z" fill="#8e9bad" />
              </g>
            </svg>
            {{ translations.trnsl_cart }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="bottom-head">
      <div class="container-bottom">
        <div
          v-if="showLess"
          @click="showLess = false"
          class="showLessCategories"
        >
          <svg id="show-apps-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g id="apps">
              <path id="Path_1232" data-name="Path 1232" d="M0,4H4V0H0ZM6,16h4V12H6ZM0,16H4V12H0Zm0-6H4V6H0Zm6,0h4V6H6ZM12,0V4h4V0ZM6,4h4V0H6Zm6,6h4V6H12Zm0,6h4V12H12Z" fill="#3b4b68" />
            </g>
          </svg>
        </div>
        <div
          v-else
          @click="showLess = true"
          class="showLessCategories"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g id="close" transform="translate(-1141 -27)">
              <g
                id="Rectangle_170"
                data-name="Rectangle 170"
                transform="translate(1141 41.543) rotate(-45)"
                fill="#3b4b68"
                stroke="#3b4b68"
                stroke-width="1"
              >
                <rect width="20.566" height="2.061" stroke="none" />
                <rect x="0.5" y="0.5" width="19.566" height="1.061" fill="none" />
              </g>
              <g
                id="Rectangle_171"
                data-name="Rectangle 171"
                transform="translate(1155.543 42.996) rotate(-135)"
                fill="#3b4b68"
                stroke="#3b4b68"
                stroke-width="1"
              >
                <rect width="20.566" height="2.053" stroke="none" />
                <rect x="0.5" y="0.5" width="19.566" height="1.053" fill="none" />
              </g>
            </g>
          </svg>
        </div>
        <span @click="showLess = !showLess" style="margin-left:20px;white-space: pre;width:100px;" class="categories-name">{{ translations.allCategories }}</span>
        <div v-if="favoriteCategories" class="list-categories">
          <span :key="id" @click="redirectFavoriteCategory(slug, own_level)" v-for="{id, translation, slug, short, own_level} in favoriteCategories" class="categories-name">
            {{ short === "" ? translation : short }}
          </span>
        </div>
        <div v-if="favoriteCategories.length > 5" class="moreFavorites">
          ...
        </div>
      </div>
    </div>
    <div
      :class="{ 'container-bottom--hidden': showLess }"
      class="container-bottom"
    >
      <div class="container-bottom--dropdown">
        <div id="left-menu" class="left-block-categorie">
          <div
            :key="id"
            @click="setChildren({children, slug, name: translation})"
            @mousedown="redirectAnotherPage('catalog', slug)"
            v-for="{translation, children, short, id, slug} in sortedCategories"
          >
            {{ short === "" ? translation : short }}
          </div>
        </div>
        <div class="right-block-categorie">
          <div class="categories__columns">
            <div class="categories__column">
              <div
                v-for="(child, index) in childrens && childrens.children"
                v-if="sortedCategories && index % 3 === 0"
                :key="index"
                class="categorie"
              >
                <nuxt-link
                  :to="localePath(child && child.children && child.children.length > 0 ? { name: 'category-slug', params: { slug: child.slug }} : { name: 'category-list-slug', params: { slug: child.slug } })"
                  @click.native="showLess = !showLess"
                  class="subCategory"
                >
                  {{ child.short === "" ? child.translation : child.short }}
                </nuxt-link>
                <p v-if="index <= 4" @click="redirectAnotherPage('category-list', nephew.slug)" v-for="(nephew, index) in child && child.children && child.children.slice(0, 5)" class="nephew">
                  {{ nephew.short === "" ? nephew.translation : nephew.short }}
                </p>
                <nuxt-link
                  v-on:click.native="showLess = !showLess"
                  v-if="child && child.children && child.children.length > 5"
                  :to="localePath({ path: `/all-categories/category-placeholder/${child.slug}` }, $i18n.locale)"
                  class="view-more"
                >
                  {{ translations.trnsl_view_more }}
                </nuxt-link>
              </div>
            </div>
            <div class="categories__column">
              <div v-if="sortedCategories && index % 3 == 1" v-for="(child, index) in childrens && childrens.children" class="categorie">
                <nuxt-link
                  @click.native="showLess = !showLess"
                  :to="localePath(child && child.children && child.children.length > 0 ? { name: 'category-slug', params: { slug: child.slug }} : { name: 'category-list-slug', params: { slug: child.slug } })"
                  class="subCategory"
                >
                  {{ child.short === "" ? child.translation : child.short }}
                </nuxt-link>
                <p v-if="index <= 4" @click="redirectAnotherPage('category-list', nephew.slug)" v-for="(nephew, index) in child && child.children && child.children" class="nephew">
                  {{ nephew.short === "" ? nephew.translation : nephew.short }}
                </p>
                <nuxt-link
                  v-on:click.native="showLess = !showLess"
                  v-if="child && child.children && child.children.length > 5"
                  :to="localePath({ path: `/all-categories/category-placeholder/${child.slug}` }, $i18n.locale)"
                  class="view-more"
                >
                  {{ translations.trnsl_view_more }}
                </nuxt-link>
              </div>
            </div>
            <div class="categories__column">
              <div v-if="sortedCategories && index % 3 == 2" v-for="(child, index) in childrens && childrens.children" class="categorie">
                <nuxt-link
                  v-on:click.native="showLess = !showLess"
                  :to="localePath(child && child.children && child.children.length > 0 ? { name: 'category-slug', params: { slug: child.slug }} : { name: 'category-list-slug', params: { slug: child.slug } })"
                  class="subCategory"
                >
                  {{ child.short === "" ? child.translation : child.short }}
                </nuxt-link>
                <p v-if="index <= 4" @click="redirectAnotherPage('category-list', nephew.slug)" v-for="(nephew, index) in child && child.children && child.children.slice(0, 5)" class="nephew">
                  {{ nephew.short === "" ? nephew.translation : nephew.short }}
                </p>
                <nuxt-link
                  v-on:click.native="showLess = !showLess"
                  v-if="child && child.children && child.children.length > 5"
                  :to="localePath({ path: `/all-categories/category-placeholder/${child.slug}` }, $i18n.locale)"
                  class="view-more"
                >
                  {{ translations.trnsl_view_more }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import { mapGetters } from 'vuex'
import config from '~/config'
import AuthorizationModal from '~/components/modals/Authorization/Modal'
import SearchDropdown from '~/components/SearchDropdown'

export default {
  name: `Header`,
  components: {
    SearchDropdown
  },
  mixins: [ clickaway ],
  data () {
    const route = this.$nuxt.$route.name
    return {
      currentPath: route ? route.substring(0, route.length - 5) : '/',
      lang: this.$i18n.locale,
      categories: null,
      // sortedCategories: null,
      isShowingProfileDropdown: false,
      searchValue: '',
      apiSearchResults: {},
      showLess: true,
      childrens: null,
      searchBackgroundElement: null,
      searchDropdownElement: null,
      isSearchFocused: false,
      historyX: 0,
      historyY: 0,
      stopMouse: null,
      isMoving: false,
      isMovingLeftToRight: false
    }
  },
  async mounted () {
    this.searchBackgroundElement = this.$refs.searchBackground
    this.searchDropdown = this.$refs.searchDropdown
    const lang = this.$cookies.get('i18n_redirected')
    await this.$store.dispatch('app/fetchApplicationData', lang)

    const lastUpdatedCategoryStorage = localStorage.getItem(`lastUpdatedCategoryStorage`)

    const lastUpdatedCategory = (await this.$axios.$get(config.apiUrl + `information/oldest-category`)).unix
    localStorage.setItem(`lastUpdatedCategoryStorage`, lastUpdatedCategory)
    if (lastUpdatedCategoryStorage && lastUpdatedCategory > lastUpdatedCategoryStorage) {
      this.$store.dispatch('app/fetchCategories', this.$i18n.locale)
    }

    let stopMouse

    document
      .getElementById('left-menu').addEventListener('mousemove', (e) => {
        this.isMoving = true

        if (this.historyX <= e.clientX) {
          this.isMovingLeftToRight = true
          // console.log('Not changing state')
        } else {
          this.isMovingLeftToRight = false
          // console.log('Change state')
        }

        if (stopMouse) {
          clearTimeout(stopMouse)
        }

        if (this.isMovingLeftToRight) {
          stopMouse = setTimeout(() => {
            this.isMoving = false
            this.isMovingLeftToRight = false
            e.toElement.click()
          }, 200)
        } else {
          this.isMoving = false
          this.isMovingLeftToRight = false

          e.toElement.click()
        }

        this.historyX = e.clientX
        this.historyY = e.clientY
      })

    document
      .getElementById('left-menu').addEventListener('mouseout', (e) => {
        clearTimeout(stopMouse)
        console.log('mouse left')
      })

    this.getGeoLocation()
    console.log('language was selected cookies ::', this.$cookies)
    // this.fetchData()
  },
  methods: {
    redirectFavoriteCategory (slug, ownLevel) {
      switch (ownLevel) {
        case 1:
          this.$router.push(this.localePath({ path: `/catalog/${slug}` }, this.$i18n.locale))
          break
        case 2:
          this.$router.push(this.localePath({ path: `/category/${slug}` }, this.$i18n.locale))
          break
        default:
          this.$router.push(this.localePath({ path: `/category-list/${slug}` }, this.$i18n.locale))
      }

      this.showLess = true
    },
    setChildren (children) {
      this.childrens = children
    },
    leftMenuElementMouseEnter (children, event) {
      this.childrens = children
    },
    getGeoLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      }
    },
    async showPosition (position) {
      const sessionID = this.$cookies.get('session_id')
      if (sessionID === undefined) {
        const data = await this.$axios.$get(config.apiUrl + `initial?lat=${position.coords.latitude}&lng=${position.coords.longitude}&lang=${this.$i18n.locale}`)
        // Setting the fetched url, city and language from the API into cookies
        this.$cookies.set('url', data.url, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$cookies.set('city', data.city, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$cookies.set('lang', data.lang, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      }
      // if (!this.$store.app.url) {
      //   this.$store.dispatch('app/setUrl', data.url)
      //   window.location.replace(`http://${data.url.split('-')[0]}.localhost:3000/${data.lang}`)
      // }
      // this.$router
    },
    logOut () {
      this.isShowingProfileDropdown = false
      this.$auth.logout()
    },
    show () {
      this.isShowingProfileDropdown = false
      this.$modal.show(AuthorizationModal, {
        initialActiveScreen: 'logIn'
      }, {
        height: 'auto',
        width: 490
      })
    },
    showRegistration () {
      this.isShowingProfileDropdown = false
      this.$modal.show(AuthorizationModal, {
        initialActiveScreen: 'createAccount'
      }, {
        height: 'auto',
        width: 490
      })
    },
    showProfileDropdown () {
      this.isShowingProfileDropdown = !this.isShowingProfileDropdown
    },
    away () {
      this.isShowingProfileDropdown = false
    },
    redirectAnotherPage (path, slug) {
      this.$router.push(this.localePath({ path: `/${path}/${slug}` }, this.$i18n.locale))
      this.showLess = true
    },
    async fetchCategories (lang) {
      const data = await this.$axios.$get(config.apiUrl + `categories?lang=${lang}&lvl=3`)
      this.categories = data.data

      // TO REMVOE when the response will be an array
      this.sortedCategories = Object.values({ ...this.categories }).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))

      this.sortedCategories.map((children, i) => {
        if (children.hasOwnProperty('children')) {
          this.sortedCategories[i].children = Object.values(children.children).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
          this.sortedCategories[i].children.map((grandChildren, j) => {
            if (grandChildren.hasOwnProperty('children')) {
              this.sortedCategories[i].children[j].children = Object.values(grandChildren.children).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
            }
          })
        }
      })

      this.childrens = {
        children: this.sortedCategories[0].children,
        name: this.sortedCategories[0].translation
      }
    },
    async showFocuslessOverlay () {
      this.$parent.$refs.focuslessOverlay.style.opacity = 1
      this.isSearchFocused = true

      // const background = this.searchBackgroundElement
      const searchValue = this.searchValue.toLowerCase()

      if (searchValue.trim().length > 2) {
        this.apiSearchResults = (await this.$axios.$get(config.apiUrl + `search?lang=${this.$i18n.locale}&product=${searchValue}`)).data
      }

      // if (!searchValue.trim() || !this.apiSearchResults.length) {
      //   background.style.height = '0px'
      //   return
      // }

      // background.style.height = this.apiSearchResults.length === 1 ? '16px' : `${33 * (this.apiSearchResults.length - 1) + 16}px`
    },
    hideFocuslessOverlay ($event) {
      this.$parent.$refs.focuslessOverlay.style.opacity = 0
      this.isSearchFocused = false

      if (event.relatedTarget && event.relatedTarget.className === 'search-dropdown__link') {
        event.relatedTarget.click()
      }
      // this.searchBackgroundElement.style.height = '0px'
    }
  },
  computed: {
    ...mapGetters({
      translations: 'app/translations',
      sortedCategories: 'app/categories',
      favoriteCategories: 'app/favorite',
      city: 'app/city'
      // url: 'app/url'
    }),
    onSearchValueChange () {
      if (this.searchBackgroundElement) {
        // const background = this.searchBackgroundElement
        // const searchValue = this.searchValue.toLowerCase()

        // if (!searchValue.trim() || !this.apiSearchResults.length) {
        //   background.style.height = '0px'
        //   return []
        // }

        // background.style.height = this.apiSearchResults.length === 1 ? '16px' : `${33 * (this.apiSearchResults.length - 1) + 16}px`
        return this.apiSearchResults
      }

      return []
    }
  },
  watch: {
    sortedCategories () {
      const storageCategories = JSON.parse(localStorage.getItem(`${this.$i18n.locale}_categories`))

      if (storageCategories) {
        this.childrens = {
          children: [ ...this.sortedCategories[0].children ],
          name: this.sortedCategories[0].translation
        }
      }
    },
    showLess (newShowLess) {
      // this.$parent.$refs.focuslessOverlay.style.opacity = newShowLess ? 1 : 0
    }
  }
}
</script>

<style scoped>
  .view-more {
    text-decoration: none;
    color: #1769FF;
  }
  .view-more:hover {
    text-decoration: underline;
  }
  .button-container {
    position: relative;
    margin-right: 25px;
  }
  .button-container > .buttons {
    margin: 0;
  }
  .button-container__dropdown {
    box-shadow: 0 0 10px rgba(59, 75, 104, 0.4);
    left: -27px;
    position: absolute;
    top: calc(100% + 15px);
    white-space: nowrap;
    z-index: 999;
  }
  .button-container__dropdown-list {
    background-color: #ffffff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    width: 240px;
  }
  .button-container__dropdown-list::before {
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(59, 75, 104, 0.4);
    content: '';
    height: 20px;
    left: 25px;
    position: absolute;
    top: -8px;
    transform: rotate(45deg);
    width: 20px;
    z-index: -1;
  }
  .button-container__dropdown-list-item {
    color: #3B4B68;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
    padding-left: 15px;
    text-align: left;
    width: 100%;
  }
  .button-container__dropdown-list-item:hover {
    background-color: #E0E4ED;
  }
  .button-container__dropdown-container {
    background-color: #ffffff;
    border-radius: 2px;
    display: flex;
    padding: 15px 40px 15px 15px;
  }
  .button-container__dropdown-container::before {
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(59, 75, 104, 0.4);
    content: '';
    height: 20px;
    left: 25px;
    position: absolute;
    top: -8px;
    transform: rotate(45deg);
    width: 20px;
    z-index: -1;
  }
  .button-container__dropdown-button {
    color: #3B4B68;
    cursor: pointer;
    display: inline-flex;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
  }
  .button-container__dropdown-button:hover {
    text-decoration: underline;
  }
  .button-container__dropdown-button:not(:last-child) {
    margin-right: 17px;
    position: relative;
  }
  .button-container__dropdown-button:not(:last-child)::after {
    background-color: #3B4B68;
    content: '';
    cursor: auto;
    height: 12px;
    left: calc(100% + 16px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }
  .button-container__dropdown-button:not(:first-child) {
    margin-left: 17px;
  }
  .categories__columns {
    display: flex;
    justify-content: space-between;
  }

  .categories__column {
    height: 200px;
    width: 290px;
  }
  .languages__vertical-separator {
    background-color: #3B4B68;
    display: inline-flex;
    height: 9px;
    margin: 0 9px;
    width: 1px;
  }
  .languages__change-language,
  .languages__change-language:focus,
  .languages__change-language:link,
  .languages__change-language:visited {
    color: #8E9BAD;
    text-decoration: none;
  }
  .header-component {
    position: relative;
    z-index: 995;
  }
  .categorie {
    display: block;
    margin-bottom: 25px;
    padding-top: 0;
  }
  .subCategoryLink {
    color: #3B4B68;
    text-decoration: none;
  }
  .subCategoryLink:focus,
  .subCategoryLink:hover {
    text-decoration: underline;
  }
  .subCategory {
    color: #3B4B68;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 6px !important;
    cursor: pointer;
    text-decoration: none;
    display: block;
  }
  .subCategory:hover {
    text-decoration: underline;
  }
  .left-block-categorie,
  .right-block-categorie {
    height: auto;
    max-height: 630px;
    overflow-y: auto;
  }
  .left-block-categorie {
    width: 18vw;
    text-align: left;
    line-height: 3em;
    cursor: pointer;
    color: #3B4B68;
  }
  .right-block-categorie {
    width: 100%;
    padding: 20px;
  }
  .left-block-categorie > div {
    padding: 0 32px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .left-block-categorie > div:hover {
    background-color: #f7f8f9;
  }
  .categories-name {
    align-items: center;
    color: #3B4B68;
    cursor: pointer;
    display: flex;
    margin-left: 35px;
  }
  .categories-name:hover {
    text-decoration: underline;
  }
  .nephew {
    display: flex;
    font-size: 13px;
    color: var(--var-txt-color-easy);
    line-height: 1.5em;
    cursor: pointer;
    margin-bottom: 6px;
    text-decoration: none;
  }
  .nephew:hover {
    text-decoration: underline;
  }
  .container-bottom {
    background-color: #fff;
    display: flex;
    white-space: nowrap;
    position: relative;
    z-index: 10;
    width: 100%;
  }
  .container-bottom--hidden {
    display: none;
  }
  .bottom-head > .container-bottom {
    margin: 0 auto;
    max-width: 1260px;
    overflow: hidden;
    width: 100%;
  }
  .bottom-head + .container-bottom {
    background-color: #fff;
    border-top: 1px solid #D9E1EB;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
    left: 0;
    max-width: none;
    padding: 0 0 15px;
    position: absolute;
    top: 100%;
  }
  .container-bottom--dropdown {
    display: flex;
    margin: 0 auto;
    max-width: 1260px;
    position: relative;
    width: 100%;
  }
  .list-categories {
    align-items: center;
    display: flex;
    width: 100%;
  }
  .bottom-head {
    align-items: center;
    background-color: #ffffff;
    height: 50px;
    display: flex;
    justify-content: space-around;
    position: relative;
    z-index: 985;
  }
  .buttons {
    align-items: center;
    color: #3D4A67;
    margin-left: 25px;
    cursor: pointer;
    display: flex;
    text-decoration: none;
  }
  .right-content > .buttons {
    margin: 0 25px 0 0;
  }
  .buttons > svg {
    margin-right: 10px;
  }
  .search {
    margin-right: 30px;
    position: relative;
  }
  .icon-search {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }
  .search-input {
    border: 1px solid #A4B0BE;
    border-radius: 25px;
    color: #3B4B68;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    padding: 10px 50px 10px 20px;
    width: 495px;
  }
  .search-input:focus {
    border: 1px solid #3B4B68;
  }
  input[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }

  .secound-head {
    align-items: center;
    background-color: #F6F8F9;
    display: flex;
    height: 120px;
    position: relative;
  }
  .second-head__background {
    background-color: #F6F8F9;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
    height: 0;
    position: absolute;
    top: 119px;
    width: 100%;
    z-index: 999;
  }
  .container-secound {
    max-width: 1260px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    align-content: center;
    height: 15vh;
    width: 100%;
  }
  .line {
    background-color: #ffffff;
    width: 100%;
    border-bottom: 1px solid #D9E1EB;
  }
  .top-head {
    display: flex;
    justify-content: space-between;
  }
  .container {
    margin: 0 auto;
    max-width: 1260px;
  }
  .location {
    display: flex;
    align-items: center;
    height: 53px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info > span {
    color: #3B4B68;
    cursor: pointer;
    margin-left: 30px;
    padding-left: 0;
  }
  .my-city {
    color: #3B4B68;
    margin-right: 10px;
  }
  .logo-wrapper {
    text-decoration: none;
  }
  .logo {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #8E9BAD;
    cursor: pointer;
    width: 255px;
  }
  .name-logo {
    color: #3B4B68;
    font-weight: 900;
  }
  .right-content {
    display: flex;
  }
  .languages {
    align-items: center;
    display: flex;
    color: #8E9BAD !important;
    margin-left: 40px;
  }
  .languages > span {
    text-decoration: none;
    color: #8E9BAD;
  }
  .showLessCategories {
    cursor: pointer;
    display: inline-flex;
    margin-left: 5px;
  }
  .activeLinkNavigator {
    color: #3B4B68 !important;
    font-weight: 600;
  }
  .animateFlicker {
    display: inline-flex;
    margin-right: 15px;
  }
  .moreFavorites {
    position: absolute;
    right: 0;
    top: 4px;
    width: 30px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 12%, white 24%, white 100%);
    height: 50px;
    text-align: center;
  }
</style>
