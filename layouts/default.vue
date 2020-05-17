<template>
  <div>
    <!-- <modals-container /> -->
    <div ref="focuslessOverlay" class="focusless-overlay" />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import 'vue-js-modal/dist/styles.css'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Default',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body * ::-webkit-scrollbar {
  width: 14px;
}
body * ::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
  }
body * ::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}
body * ::-webkit-scrollbar-corner {
  background-color: transparent;
}

*:focus {
  outline: none;
}

body {
  font-size: 12px;
  position: relative;
}
html {
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif !important;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

button {
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  padding: 0;
  width: auto;
}

.no-underline {
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.focusless-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 200ms ease-in;
  z-index: 990;
}
</style>
