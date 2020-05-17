import axios from 'axios'
import state from './state'
import * as mutations from './mutations'
import config from '~/config'

export default {
  namespaced: true,
  mutations,
  state,
  getters: {
    translations (state) {
      return state.translation
    },
    categories (state) {
      return state.categories
    },
    favorite (state) {
      return state.favoriteCategories
    },
    city (state) {
      return state.city
    },
    url (state) {
      return state.url
    }
  },
  actions: {
    setUrl ({ commit }, url) {
      commit('setUrl', url)
    },
    fetchApplicationData ({ dispatch, commit, state }, locale) {
      // Do not run on server
      if (process.server) {
        return
      }
      commit('setLang', locale)

      setInterval(async function () {
        const lastUpdatedCategoryStorage = JSON.parse(localStorage.getItem(`lastUpdatedCategoryStorage`))

        const lastUpdatedCategory = (await axios.get(config.apiUrl + `information/oldest-category`)).unix

        if (lastUpdatedCategoryStorage && lastUpdatedCategory > lastUpdatedCategoryStorage) {
          localStorage.setItem(`lastUpdatedCategoryStorage`, lastUpdatedCategory)
          dispatch('fetchCategories', locale)
        }
      }, 2000000)

      dispatch('fetchTranslations', locale)

      const storageCategories = JSON.parse(localStorage.getItem(`${locale}_categories`))
      const favoriteCategories = JSON.parse(localStorage.getItem(`${locale}_favoriteCategories`))

      if (storageCategories && favoriteCategories) {
        commit('setCategories', { categories: storageCategories, lang: locale })
        commit('addFavoriteCategoriesStorage', { favorite: favoriteCategories, lang: locale })
      } else {
        dispatch('fetchCategories', locale)
      }
    },
    async fetchTranslations ({ commit }, locale) {
      const fetchedTranslations = (await axios.get(config.apiUrl + `sitewords?lang=${locale}&min=1`)).data.data
      commit('LOAD_LANGUAGES', fetchedTranslations)
    },
    async fetchCategories ({ commit }, locale) {
      await commit('resetFavoriteCategories')
      const fetchedCategories = (await axios.get(config.apiUrl + `categories?lang=${locale}&lvl=3`)).data.data

      const sortedCategories = Object.values({ ...fetchedCategories }).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
      let favoriteCategories = sortedCategories.filter(d => d.is_in_favorite === 2)

      // if (favoriteCategories.length) {
      //   commit('addFavoriteCategories', { favorite: favoriteCategories, lang: locale })
      // }

      let favoriteCategoriesChildren
      let favoriteCategoriesGrandChildren

      sortedCategories.map((children, i) => {
        if (children.hasOwnProperty('children')) {
          sortedCategories[i].children = Object.values(children.children).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
          favoriteCategoriesChildren = children.children.filter(d => d.is_in_favorite === 2)
          if (favoriteCategoriesChildren.length) {
            favoriteCategories = [...favoriteCategories, ...favoriteCategoriesChildren]
            // commit('addFavoriteCategories', { favorite: favoriteCategoriesChildren, lang: locale })
          }
          sortedCategories[i].children.map((grandChildren, j) => {
            if (grandChildren.hasOwnProperty('children')) {
              sortedCategories[i].children[j].children = Object.values(grandChildren.children).sort((a, b) => parseInt(a.sort_order) - parseInt(b.sort_order))
              favoriteCategoriesGrandChildren = grandChildren.children.filter(d => d.is_in_favorite === 2)
              if (favoriteCategoriesGrandChildren.length) {
                favoriteCategories = [...favoriteCategories, ...favoriteCategoriesGrandChildren]
              }
            }
          })
        }
      })

      commit('addFavoriteCategories', { favorite: favoriteCategories, lang: locale })
      commit('setCategories', { categories: sortedCategories, lang: locale })
    }
  }
}
