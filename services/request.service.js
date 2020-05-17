import axios from 'axios'

const search = (type, query, store) => {
  if (store) {
    store.commit('search/SAVE_SEARCH_RESPONSE', null)
  }
  return axios
    .post(`/api/search/${type}`, query)
    .then((response) => {
      if (response.data) {
        if (store) {
          store.commit('search/SAVE_SEARCH_RESPONSE', response.data)
        }
        return response.data
      }
      return false
    })
    .catch(() => {
      // console.log(err);
      return false
    })
}

const GetProfile = (id) => {
  return axios
    .post(`/api/profile/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data
      }
      return false
    })
    .catch(() => {
      // console.log(err);
      return false
    })
}

const GetTerrImage = (id) => {
  return axios
    .post(`/api/images/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data
      }
      return false
    })
    .catch(() => {
      // console.log(err);
      return false
    })
}

const GetAutoComplete = (value, type) => {
  return axios
    .post('/api/autocomplete', {
      query: value,
      types: [type]
    })
    .then((res) => {
      return res.data
    })
}

export default {
  search,
  GetAutoComplete,
  GetProfile,
  GetTerrImage
}
