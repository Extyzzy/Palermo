<template>
  <div class="actions-header">
    <div class="actions-header__container">
      <div class="actions-header__logo-section">
        <nuxt-link
          :to="localePath('index')"
          class="actions-header__logo-link"
        >
          <h1 class="action-header__logo">
            <span class="action-header__logo--bold">Palermo</span>shopping
          </h1>
        </nuxt-link>
      </div>
      <div class="actions-header__search-section">
        <form class="actions-header__search-form">
          <input
            autocomplete="false"
            class="actions-header__search-input"
            placeholder="Поиск"
            type="search"
          >
        </form>
      </div>
      <div class="actions-header__navigation">
        <button
          class="actions-header__link-wrapper"
        >
          <span class="span-svg-icon actions-header__link-icon">
            <UserIcon class="actions-header__link-svg" />
          </span>
          <span class="actions-header__link-text">
            Мой профиль
          </span>
        </button>
        <button
          class="actions-header__link-wrapper"
        >
          <span class="span-svg-icon actions-header__link-icon">
            <MessagesIcon class="actions-header__link-svg" />
          </span>
          <span class="actions-header__link-text">
            Чаты
          </span>
        </button>
        <button
          class="actions-header__link-wrapper"
        >
          <span class="span-svg-icon actions-header__link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8,8A4,4,0,1,0,4,4,4.012,4.012,0,0,0,8,8Zm0,2c-2.7,0-8,1.3-8,4v2H16V14C16,11.3,10.7,10,8,10Z" fill="#8f99ab" />
            </svg>
          </span>
          <span class="actions-header__link-text">
            Избранное
          </span>
        </button>
        <button
          class="actions-header__link-wrapper"
        >
          <span class="span-svg-icon actions-header__link-icon" />
          <span class="actions-header__link-text">
            Корзина
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MessagesIcon from '@/assets/icons/messages.svg'
import UserIcon from '@/assets/icons/user.svg'

export default {
  components: {
    MessagesIcon,
    UserIcon
  }
}
</script>

<style lang="scss" scoped>
.actions-header {
  background-color: #F6F8F9;
  height: 120px;
  width: 100%;
}

.actions-header__container {
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 20px;
  width: 100%;
}

.actions-header__logo-section {
  flex-basis: 255px;
}

.actions-header__logo-link {
  display: inline-flex;
  text-decoration: none;
}

.action-header__logo {
  color: $color--gray;
  font-size: 24px;
  font-weight: 400;

  &--bold {
    color: $color--dark-blue;
    font-weight: 800;
  }
}

.actions-header__search-section {
  display: inline-flex;
  flex-basis: 495px;
  margin-right: 30px;
}

.actions-header__search-form {
  position: relative;
  width: 100%;
}

.actions-header__search-input {
  background-color: $color--white;
  border: 1px solid #A4B0BE;
  border-radius: 20px;
  color: $color--dark-blue;
  height: 40px;
  font-size: 14px;
  padding: 0 20px;
  transition: border 150ms linear;
  width: 100%;

  &:focus {
    border: 1px solid $color--dark-blue;
  }

  &::placeholder {
    color: $color--gray;
  }
}

.actions-header__navigation {
  align-items: center;
  display: flex;
}

.actions-header__link-wrapper {
  align-items: center;
  display: flex;
  text-decoration: none;

  &:focus .actions-header__link-svg path,
  &:hover .actions-header__link-svg path {
    fill: $color--dark-blue;
  }

  &:not(:last-child) {
    margin-right: 25px;
  }
}

.span-svg-icon {
  display: inline-flex;
}

.actions-header__link-icon {
  margin-right: 12px;

  & path {
    transition: fill 150ms linear;
  }
}

.actions-header__link-text {
  color: $color--dark-blue;
}
</style>
