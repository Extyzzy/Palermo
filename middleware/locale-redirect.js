export default function (context) {
  // hypothetical set of all supported locales
  // const locales = ['ru', 'en', 'ro']

  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log('Current locale :: ', context.app.store)
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

  // if the current prefix is neither 'en' nor 'ge'
  // if (!locales.indexOf(params.locale)) {
  //   // redirect to the same path with default locale as prefix
  //   redirect('301', '/' + locales[0] + route.fullPath)
  // }
}
