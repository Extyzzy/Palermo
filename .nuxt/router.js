import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9cbc83a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _88b82680 = () => interopDefault(import('../pages/all-categories/index.vue' /* webpackChunkName: "pages/all-categories/index" */))
const _4169fd95 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _37b4be0d = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _06a883f2 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _235ea976 = () => interopDefault(import('../pages/all-categories/_categoryName.vue' /* webpackChunkName: "pages/all-categories/_categoryName" */))
const _22498a9c = () => interopDefault(import('../pages/catalog/_slug/index.vue' /* webpackChunkName: "pages/catalog/_slug/index" */))
const _11c66f34 = () => interopDefault(import('../pages/category-list/_slug/index.vue' /* webpackChunkName: "pages/category-list/_slug/index" */))
const _534ce8f1 = () => interopDefault(import('../pages/category/_slug/index.vue' /* webpackChunkName: "pages/category/_slug/index" */))
const _35fe1cc5 = () => interopDefault(import('../pages/product/_slug.vue' /* webpackChunkName: "pages/product/_slug" */))
const _6b93cb84 = () => interopDefault(import('../pages/all-categories/_category/_subCategoryName.vue' /* webpackChunkName: "pages/all-categories/_category/_subCategoryName" */))
const _7f190e5c = () => interopDefault(import('../pages/all-categories/_category/_subCategory/_product.vue' /* webpackChunkName: "pages/all-categories/_category/_subCategory/_product" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en/",
    component: _9cbc83a6,
    name: "index___en"
  }, {
    path: "/en/all-categories",
    component: _88b82680,
    name: "all-categories___en"
  }, {
    path: "/en/cart",
    component: _4169fd95,
    name: "cart___en"
  }, {
    path: "/en/product",
    component: _37b4be0d,
    name: "product___en"
  }, {
    path: "/en/test",
    component: _06a883f2,
    name: "test___en"
  }, {
    path: "/ro/",
    component: _9cbc83a6,
    name: "index___ro"
  }, {
    path: "/ro/all-categories",
    component: _88b82680,
    name: "all-categories___ro"
  }, {
    path: "/ro/cart",
    component: _4169fd95,
    name: "cart___ro"
  }, {
    path: "/ro/product",
    component: _37b4be0d,
    name: "product___ro"
  }, {
    path: "/ro/test",
    component: _06a883f2,
    name: "test___ro"
  }, {
    path: "/ru/",
    component: _9cbc83a6,
    name: "index___ru"
  }, {
    path: "/ru/all-categories",
    component: _88b82680,
    name: "all-categories___ru"
  }, {
    path: "/ru/cart",
    component: _4169fd95,
    name: "cart___ru"
  }, {
    path: "/ru/product",
    component: _37b4be0d,
    name: "product___ru"
  }, {
    path: "/ru/test",
    component: _06a883f2,
    name: "test___ru"
  }, {
    path: "/en/all-categories/:categoryName?",
    component: _235ea976,
    name: "all-categories-categoryName___en"
  }, {
    path: "/en/catalog/:slug?",
    component: _22498a9c,
    name: "catalog-slug___en"
  }, {
    path: "/en/category-list/:slug?",
    component: _11c66f34,
    name: "category-list-slug___en"
  }, {
    path: "/en/category/:slug?",
    component: _534ce8f1,
    name: "category-slug___en"
  }, {
    path: "/en/product/:slug",
    component: _35fe1cc5,
    name: "product-slug___en"
  }, {
    path: "/ro/all-categories/:categoryName?",
    component: _235ea976,
    name: "all-categories-categoryName___ro"
  }, {
    path: "/ro/catalog/:slug?",
    component: _22498a9c,
    name: "catalog-slug___ro"
  }, {
    path: "/ro/category-list/:slug?",
    component: _11c66f34,
    name: "category-list-slug___ro"
  }, {
    path: "/ro/category/:slug?",
    component: _534ce8f1,
    name: "category-slug___ro"
  }, {
    path: "/ro/product/:slug",
    component: _35fe1cc5,
    name: "product-slug___ro"
  }, {
    path: "/ru/all-categories/:categoryName?",
    component: _235ea976,
    name: "all-categories-categoryName___ru"
  }, {
    path: "/ru/catalog/:slug?",
    component: _22498a9c,
    name: "catalog-slug___ru"
  }, {
    path: "/ru/category-list/:slug?",
    component: _11c66f34,
    name: "category-list-slug___ru"
  }, {
    path: "/ru/category/:slug?",
    component: _534ce8f1,
    name: "category-slug___ru"
  }, {
    path: "/ru/product/:slug",
    component: _35fe1cc5,
    name: "product-slug___ru"
  }, {
    path: "/en/all-categories/:category?/:subCategoryName",
    component: _6b93cb84,
    name: "all-categories-category-subCategoryName___en"
  }, {
    path: "/ro/all-categories/:category?/:subCategoryName",
    component: _6b93cb84,
    name: "all-categories-category-subCategoryName___ro"
  }, {
    path: "/ru/all-categories/:category?/:subCategoryName",
    component: _6b93cb84,
    name: "all-categories-category-subCategoryName___ru"
  }, {
    path: "/en/all-categories/:category?/:subCategory/:product?",
    component: _7f190e5c,
    name: "all-categories-category-subCategory-product___en"
  }, {
    path: "/ro/all-categories/:category?/:subCategory/:product?",
    component: _7f190e5c,
    name: "all-categories-category-subCategory-product___ro"
  }, {
    path: "/ru/all-categories/:category?/:subCategory/:product?",
    component: _7f190e5c,
    name: "all-categories-category-subCategory-product___ru"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
