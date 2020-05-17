<template>
  <div class="localisation-header">
    <div class="localisation-header__container">
      <div class="localisation-header__localisation">
        <div class="region-button">
          <span class="region-button__icon-pointer">
            hi
          </span>
          {{ 'Мой город' }}
          <span class="region-button__icon-dropdown">
            hi
          </span>
        </div>
        <div class="localisation-header__languages" />
      </div>
      <div class="localisation-header__informative-links" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style
  lang="scss"
  scoped
>
  .localisation-header {
    background-color: $color--white;
    height: 54px;
    width: 100%;
  }
</style>
