<template>
  <nav
    aria-label="breadcrumbs"
    class="bread-crumbs"
  >
    <ul class="bread-crumbs__list">
      <li
        :key="i"
        v-for="({ title, url }, i) in data"
        class="bread-crumbs__item"
      >
        <nuxt-link
          v-if="url"
          :to="url"
          v-html="title"
          class="bread-crumbs__link"
        />
        <p v-html="title" v-else />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: ['data'],
  computed: {
    crumbs () {
      const crumbs = []
      const pagesOfParams = this.$route.path.split('/').slice(2)
      const params = Object.values({ ...this.$route.params })
      const queries = []

      for (const [ key, value ] of Object.entries(this.$route.query)) {
        queries.push(`${key}=${value}`)
      }

      // Generate the middleware dynamic routes
      params.map((page, i) => {
        crumbs.push({
          text: params[i],
          url: `${([ ...pagesOfParams ].slice(0, i + 1)).join('/')}/${pagesOfParams[i + 1]}`
        })
      })

      // Add first static route
      crumbs.unshift({
        text: pagesOfParams[0],
        url: pagesOfParams[0]
      })

      // Add query params
      crumbs[crumbs.length - 1].url += `?${queries.join('&')}`

      console.log('queries', queries)
      console.log('params', params)
      console.log('pageofparams', pagesOfParams)

      console.log('GENERATED CRUMBS')
      console.dir(crumbs)

      return crumbs
    }
  }
  // computed: {
  //   crumbs () {
  //     const crumbs = []
  //     this.$route.matched.map((item, i, { length }) => {
  //       const crumb = {}
  //       crumb.path = item.path
  //       crumb.name = this.$i18n.t('route.' + (item.name || item.path))

  //       // is last item?
  //       if (i === length - 1) {
  //         // is param route? .../.../:id
  //         if (item.regex.keys.length > 0) {
  //           crumbs.push({
  //             path: item.path.replace(/\/:[^/:]*$/, ''),
  //             name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, ''))
  //           })
  //           crumb.path = this.$route.path
  //           crumb.name = this.$i18n.t('route.' + this.$route.name, [
  //             crumb.path.match(/[^/]*$/)[0]
  //           ])
  //         }
  //         crumb.classes = 'is-active'
  //       }

  //       crumbs.push(crumb)
  //     })

  //     return crumbs
  //   }
  // }
}
</script>

<style
  lang="scss"
  scoped
>
  .bread-crumbs {
    align-items: center;
    display: flex;
    padding-bottom: 40px;
  }

  .bread-crumbs__list {
    align-items: center;
    display: flex;
    list-style-type: none;
    padding: 0;
  }

  .bread-crumbs__item {
    color: #8E9BAD;
    font-size: 11px;
    font-weight: 400;
    position: relative;

    &:last-child {
      color: #3B4B68;

      & > a {
        color: #3B4B68;
      }
    }

    &:not(:first-child) {
      margin-left: 7px;

      &:after {
        content: '/';
        position: absolute;
        left: -13px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &:not(:last-child) {
      margin-right: 14px;
    }
  }

  .bread-crumbs__link {
    color: #8E9BAD;
    font-size: 11px;
    font-weight: 400;
    text-decoration: none;

    &:focus,
    &:hover {
      color: #3B4B68;
      text-decoration: underline;
    }
  }

  .level {
    background-color: tomato;
  }
</style>
