<template>
  <form class="authorization-modal-form">
    <div class="authorization-modal-form__inputs">
      <Input
        id="email"
        v-model="emailValue"
        :labelText="$t('modal.authorization.emailPlaceholder')"
        autocomplete="off"
        type="email"
      />
    </div>
    <button
      :disabled="!emailValue"
      @click.prevent
      class="authorization-modal__submit"
      type="submit"
    >
      {{ $t('modal.authorization.logIn.submit') }}
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
      emailValue: ''
    }
  }
}
</script>
