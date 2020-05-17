export default function (context) {
  // process.server ? console.log('HOST :: ', context.req.headers.host) : console.log('its client side')
  if (process.server) {
    // console.log('HOST :: ', context.req.headers)
  }
  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
