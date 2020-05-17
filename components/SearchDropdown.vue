<template>
  <div class="search-dropdown">
    <div class="search-dropdown__container">
      <ul class="search-dropdown__suggestion-list">
        <li
          v-for="({ short, product_id: id, product: { slug } }, index) in suggestions.products"
          :key="index"
          class="search-dropdown__suggestion-item"
        >
          <nuxt-link
            :to="localePath({ name: 'product-slug', params: { slug }, query: { id } })"
            class="search-dropdown__link"
          >
            {{ `${decoder(short).slice(0, decoder(short).toLowerCase().indexOf(searchValueLowerCase))}` }}<span class="search-dropdown__link--bold">{{ `${decoder(short).slice(decoder(short).toLowerCase().indexOf(searchValueLowerCase), indexOfEnd(decoder(short).toLowerCase()))}` }}</span>{{ `${decoder(short).slice(indexOfEnd(decoder(short).toLowerCase()), decoder(short).length)}` }}
          </nuxt-link>
        </li>
        <li
          v-for="({ children, short, main_data: {id, slug, own_level} }) in suggestions.categories"
          :key="id"
          class="search-dropdown__suggestion-item"
        >
          <nuxt-link
            :to="localePath({ path: getRedirectPage(own_level, slug, children) })"
            class="search-dropdown__link"
          >
            {{ `${decoder(short).slice(0, decoder(short).toLowerCase().indexOf(searchValueLowerCase))}` }}<span class="search-dropdown__link--bold">{{ `${decoder(short).slice(decoder(short).toLowerCase().indexOf(searchValueLowerCase), indexOfEnd(decoder(short).toLowerCase()))}` }}</span>{{ `${decoder(short).slice(indexOfEnd(decoder(short).toLowerCase()), decoder(short).length)}` }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchDropdown',
  props: {
    searchValue: {
      required: true,
      type: String
    },
    suggestions: {
      required: true,
      type: Object
    }
  },
  computed: {
    searchValueLowerCase () {
      return this.searchValue.toLowerCase()
    }
  },
  methods: {
    getRedirectPage (ownLevel, slug, children) {
      let nameLocalePath
      switch (ownLevel) {
        case 1:
          nameLocalePath = `/catalog/${slug}`
          // this.$router.push(this.localePath({ path: `/catalog/${slug}` }, this.$i18n.locale))
          break
        case 2:
          nameLocalePath = children ? `/category/${slug}` : `/category-list/${slug}`
          // this.$router.push(this.localePath({ path: `/category/${slug}` }, this.$i18n.locale))
          break
        default:
          nameLocalePath = `/category-list/${slug}`
          // this.$router.push(this.localePath({ path: `/category-list/${slug}` }, this.$i18n.locale))
      }

      return nameLocalePath
    },
    decoder (str) {
      const textArea = document.createElement('textarea')
      textArea.innerHTML = str
      return textArea.value
    },
    indexOfEnd (suggestion) {
      const searchValue = this.searchValue.toLowerCase()
      const formatedeSuggestion = suggestion.toLowerCase()
      const io = formatedeSuggestion.indexOf(searchValue)

      return io === -1 ? -1 : io + searchValue.length
    }
  }
}
</script>

<style>
  .search-dropdown {
    background-color: #F6F8F9;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
    left: 0;
    position: absolute;
    top: calc(100% - 35px);
    width: 100%;
    z-index: 999;
  }

  .search-dropdown__container {
    height: auto;
    margin: 0 auto;
    max-height: 340px;
    max-width: 1260px;
    overflow-y: auto;
    padding-left: 255px;
    width: 100%;
  }

  .search-dropdown__suggestion-list {
    list-style-type: none;
    padding: 0;
  }

  .search-dropdown__suggestion-item {
    padding: 0;
  }

  .search-dropdown__suggestion-item:last-child {
    padding-bottom: 10px;
  }

  .search-dropdown__link {
    color: #3B4B68;
    display: block;
    font-size: 14px;
    padding: 7px 0 7px 21px;
    text-decoration: none;
  }

  .search-dropdown__link:focus,
  .search-dropdown__link:hover {
    background-color: #E0E4ED;
    border-radius: 2px;
  }

  .search-dropdown__link--bold {
    font-weight: 700;
  }
</style>
