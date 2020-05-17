<template>
  <div class="authorization-modal">
    <ButtonCloseModal />
    <div class="authorization-modal__container">
      <h2 class="authorization-modal__logo">
        <span class="authorization-modal__logo--bold">Palermo</span>shopping
      </h2>
    </div>
    <div class="authorization-modal__instructions">
      <h3 class="authorization-modal__instructions-title">
        {{ $t(`modal.authorization.${activeScreen}.title`) }}
      </h3>
      <p class="authorization-modal__instructions-message">
        {{ $t(`modal.authorization.${activeScreen}.message`) }}
      </p>
    </div>
    <div class="authorization-modal__form">
      <CreateAccountForm
        v-if="activeScreen === 'createAccount'"
        @updateActiveScreen="updateActiveScreen"
      />
      <LogInForm
        v-else-if="activeScreen === 'logIn'"
        @updateActiveScreen="updateActiveScreen"
      />
      <PasswordResetForm
        v-else-if="activeScreen === 'resetPassword'"
        @updateActiveScreen="updateActiveScreen"
      />
    </div>
  </div>
</template>

<script>
import ButtonCloseModal from '@/components/modals/ButtonCloseModal'
import CreateAccountForm from '@/components/modals/Authorization/CreateAccountForm'
import LogInForm from '@/components/modals/Authorization/LogInForm'
import PasswordResetForm from '@/components/modals/Authorization/PasswordResetForm'

export default {
  name: 'AuthorizationModal',
  components: {
    ButtonCloseModal,
    CreateAccountForm,
    LogInForm,
    PasswordResetForm
  },
  props: {
    initialActiveScreen: {
      type: String,
      required: true,
      validator: value => (
        [
          'createAccount',
          'logIn',
          'resetPassword'
        ].includes(value)
      )
    }
  },
  data () {
    return {
      activeScreen: this.initialActiveScreen
    }
  },
  methods: {
    updateActiveScreen (screen) {
      this.activeScreen = screen
    }
  }
}
</script>

<style lang="scss" scoped>
.authorization-modal {
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  padding: 35px 45px 70px;
  position: relative;
}

.authorization-modal__container {
  display: flex;
  flex-direction: column;
}

.authorization-modal__logo {
  color: #3B4B68;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 57px;
  text-align: center;
}

.authorization-modal__logo--bold {
  font-weight: 800;
}

.authorization-modal__instructions {
  margin-bottom: 28px;
  text-align: center;
}

.authorization-modal__instructions-title {
  color: #3B4B68;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 5px;
}

.authorization-modal__instructions-message {
  color: #3B4B68;
  font-size: 12px;
  line-height: 2;
}

::v-deep .authorization-modal-form__inputs {
  margin-bottom: 20px;
}

::v-deep .authorization-modal__modal-link {
  color: #1769FF;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;

  &:active,
  &:hover {
    text-decoration: underline;
  }

  &--underline {
    text-decoration: underline;
  }
}

::v-deep .authorization-modal__submit {
  background-color: #E0E4ED;
  border: none;
  border-radius: 20px;
  color: #3B4B68;
  cursor: pointer;
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 800;
  margin: 0 auto 28px;
  padding: 12px 35px;
  text-transform: uppercase;
  width: 100%;

  &:active,
  &:hover:active {
    background-color: #637188;
  }

  &:disabled,
  &:hover:disabled {
    background-color: #E0E4ED;
    color: #8E9BAD;
    cursor: auto;
  }

  &:hover {
    background-color: #8E9BAD;
    color: #FFFFFF;
  }
}

::v-deep .authorization-modal__footer {
  color: #3B4B68;
  text-align: center;
}
</style>
