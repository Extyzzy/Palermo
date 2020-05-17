import axios from 'axios'

import Vue from 'vue'
import Vuex from 'vuex'

import app from './app'
import card from './card'
import shopCart from './shopCart'
Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    modules: {
      app,
      card,
      shopCart
    },
    actions: {
      async nuxtServerInit ({ commit, dispatch }, { app, req, redirect }) {
        let sessionID = this.$cookies.get('session_id')

        if (sessionID === undefined) {
          sessionID = (await axios.get('https://backend-dev.palermo.md/api/initial')).data.session_id
          this.$cookies.set('session_id', sessionID)
        }

        let payload

        const sessionIdData = await axios.get(`https://backend-dev.palermo.md/api/session?session_id=${sessionID}`)

        if (!sessionIdData.data.success) {
          sessionID = (await axios.get('https://backend-dev.palermo.md/api/initial')).data.session_id
          this.$cookies.set('session_id', sessionID)
          payload = JSON.parse((await axios.get(`https://backend-dev.palermo.md/api/session?session_id=${sessionID}`)).data.data.payload)
        } else if (sessionIdData.data.success) {
          payload = JSON.parse(sessionIdData.data.data.payload)
          this.$cookies.set('session_id', sessionIdData.data.session_id)
        }

        const previouslySelectedLanguage = this.$cookies.get('i18n_redirected')

        if (previouslySelectedLanguage !== undefined) {
          this.$cookies.set('i18n_redirected', previouslySelectedLanguage)
        } else if ((req.url.split('/').filter(i => i)).length) {
          this.$cookies.set('i18n_redirected', (req.url.split('/').filter(i => i))[0])
        }

        let fetchLang = payload.lang
        if (previouslySelectedLanguage !== undefined) {
          fetchLang = previouslySelectedLanguage
        }
        app.i18n.setLocale(fetchLang)

        if (process.env.NODE_ENV !== 'development' && (req.headers.host.split('.')[0] !== payload.url.split('.')[0] || !(req.url.split('/').filter(i => i)).length)) {
          await redirect(301, `https://${payload.url}/${fetchLang}`)
        }

        commit('app/setCity', payload.city)
        commit('app/setLang', fetchLang)
      }
    }
  })
}
