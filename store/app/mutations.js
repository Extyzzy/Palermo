export function setCategories (state, { categories, lang }) {
  state.categories = categories
  localStorage.setItem(`${lang}_categories`, JSON.stringify(state.categories))
}

export function addFavoriteCategoriesStorage (state, { favorite, lang }) {
  state.favoriteCategories = favorite

  localStorage.setItem(`${lang}_favoriteCategories`, JSON.stringify(state.favoriteCategories))
}

export function addFavoriteCategories (state, { favorite, lang }) {
  state.favoriteCategories = favorite

  localStorage.setItem(`${lang}_favoriteCategories`, JSON.stringify(state.favoriteCategories))
}

export function resetFavoriteCategories (state) {
  state.favoriteCategories = []
}

export function setCity (state, city) {
  state.city = city
}

export function setLang (state, lang) {
  state.lang = lang
}

export function setUrl (state, url) {
  state.url = url
}

export function LOAD_LANGUAGES (state, languages) {
  state.translation = languages
  state.isLoadedTranslation = true
}
