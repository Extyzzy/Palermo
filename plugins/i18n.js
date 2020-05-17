// import axios from 'axios'
// import config from '~/config'

export default (context) => {
  // Detect language switch
  context.app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    // const data = await axios.get(config.apiUrl + `sitewords?lang=${newLocale}&min=1`)
    context.store.dispatch('app/fetchApplicationData', newLocale)
  }
}
