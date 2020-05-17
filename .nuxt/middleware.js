const middleware = {}

middleware['locale-redirect'] = require('../middleware/locale-redirect.js')
middleware['locale-redirect'] = middleware['locale-redirect'].default || middleware['locale-redirect']

middleware['sub-domain-redirect'] = require('../middleware/sub-domain-redirect.js')
middleware['sub-domain-redirect'] = middleware['sub-domain-redirect'].default || middleware['sub-domain-redirect']

export default middleware
