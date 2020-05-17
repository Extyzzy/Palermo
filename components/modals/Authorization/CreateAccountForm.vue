<template>
  <form class="authorization-modal-form">
    <div class="authorization-modal-form__inputs">
      <Input
        id="name"
        v-model="nameValue"
        :labelText="$t('modal.authorization.namePlaceholder')"
        autocomplete="off"
        type="text"
      />
      <Input
        id="email"
        v-model="emailValue"
        :labelText="$t('modal.authorization.emailPlaceholder')"
        autocomplete="off"
        type="email"
      />
      <Input
        id="password"
        v-model="passwordValue"
        :labelText="$t('modal.authorization.passwordPlaceholder')"
        autocomplete="off"
        type="password"
      />
      <Input
        id="password_confirmation"
        v-model="confirmPasswordValue"
        :labelText="$t('modal.authorization.confirmPasswordPlaceholder')"
        autocomplete="off"
        type="password"
      />
    </div>
    <button
      :disabled="!nameValue || !emailValue || !passwordValue || !confirmPasswordValue"
      @click.prevent="register"
      class="authorization-modal__submit"
      type="submit"
    >
      {{ $t('modal.authorization.createAccount.submit') }}
    </button>
    <p class="authorization-modal__footer">
      {{ $t('modal.authorization.createAccount.footerMessage') }}
      <button
        @click.prevent="$emit('updateActiveScreen', 'logIn')"
        class="authorization-modal__modal-link authorization-modal__modal-link--underline"
      >
        {{ $t('modal.authorization.createAccount.footerLink') }}
      </button>
    </p>
  </form>
</template>

<script>
import Input from '@/components/form/Input'

export default {
  name: 'LogInForm',
  components: {
    Input
  },
  data () {
    return {
      nameValue: '',
      emailValue: '',
      passwordValue: '',
      confirmPasswordValue: ''
    }
  },
  methods: {
    async register () {
      console.log('Registration button was clicked')

      const formData = new FormData()

      formData.append('name', this.nameValue)
      formData.append('email', this.emailValue)
      formData.append('password', this.passwordValue)
      formData.append('password_confirmation', this.confirmPasswordValue)

      const response = await this.$axios.$post(`${process.env.API_URL}register`, formData)

      console.log('registration response', response)

      if (response.success) {
        this.$auth.loginWith('local', {
          data: {
            email: this.emailValue,
            password: this.passwordValue
          }
        })

        this.$parent.$emit('close')
      }
    }
  }
}
</script>
