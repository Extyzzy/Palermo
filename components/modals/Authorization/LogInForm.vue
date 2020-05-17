<template>
  <form
    ref="logInForm"
    @submit.prevent="logIn"
    class="authorization-modal-form log-in-form"
  >
    <div class="authorization-modal-form__inputs">
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
    </div>
    <div class="log-in-form__additional-actions">
      <div class="log-in-form__oauth-buttons">
        <button class="log-in-form__oauth-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M28.088,0H1.916A1.915,1.915,0,0,0,0,1.914V28.086A1.915,1.915,0,0,0,1.916,30h26.17A1.914,1.914,0,0,0,30,28.086V1.914A1.91,1.91,0,0,0,28.088,0Zm-3.2,18.28c.548.559,1.738,1.5,1.522,2.451-.2.876-1.507.557-2.778.608-1.45.061-2.31.093-3.182-.608A9.666,9.666,0,0,1,19.4,19.565c-.358-.4-.809-1.111-1.423-1.084-1.1.055-.758,1.592-1.15,2.64-6.131.965-8.593-2.822-10.765-6.5a55.683,55.683,0,0,1-2.572-5.6l4.336-.015s1.391,2.53,1.759,3.182a15.859,15.859,0,0,0,1.014,1.49c.3.411.771,1.215,1.287,1.15.84-.108.993-3.368.472-4.461-.207-.442-.7-.6-1.219-.747.174-1.1,4.863-1.325,5.621-.474,1.1,1.236-.762,4.679.745,5.682,2.117-1.109,3.925-5.754,3.925-5.754l5.077.032a16.267,16.267,0,0,1-1.626,3.624c-.485.652-2.094,2.1-2.03,3.182C22.9,16.765,24.212,17.594,24.885,18.28Z" fill="#8e9bad" /></svg>
        </button>
        <button class="log-in-form__oauth-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M28.343,0H1.656A1.656,1.656,0,0,0,0,1.657V28.344A1.656,1.656,0,0,0,1.656,30H16.024V18.383H12.114V13.855h3.909V10.516c0-3.874,2.366-5.985,5.822-5.985a32.425,32.425,0,0,1,3.493.178v4.05h-2.4c-1.88,0-2.242.894-2.242,2.2v2.89h4.484L24.6,18.381H20.7V30h7.644A1.657,1.657,0,0,0,30,28.344V1.656A1.656,1.656,0,0,0,28.343,0Z" transform="translate(0 -0.001)" fill="#8e9bad" /></svg>
        </button>
        <button class="log-in-form__oauth-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M40.564,24.694A3.023,3.023,0,1,0,37.523,21.7,3,3,0,0,0,40.564,24.694Z" transform="translate(-25.547 -12.697)" fill="#8e9bad" /><path d="M28.4,0H1.6A1.6,1.6,0,0,0,0,1.6V28.4A1.6,1.6,0,0,0,1.6,30H28.4A1.6,1.6,0,0,0,30,28.4V1.6A1.6,1.6,0,0,0,28.4,0ZM15.026,2.8a6.176,6.176,0,1,1-6.2,6.162A6.179,6.179,0,0,1,15.026,2.8Zm6.917,14.779A7.425,7.425,0,0,1,19.269,19.3a12.608,12.608,0,0,1-3.036.68c.156.17.23.253.327.352,1.406,1.412,2.817,2.819,4.218,4.235a1.394,1.394,0,0,1,.314,1.642,1.664,1.664,0,0,1-1.562.974,1.524,1.524,0,0,1-.987-.5c-1.061-1.068-2.142-2.115-3.18-3.2-.3-.317-.448-.258-.715.018q-1.6,1.648-3.241,3.255a1.361,1.361,0,0,1-1.641.294,1.659,1.659,0,0,1-.958-1.529,1.53,1.53,0,0,1,.514-1.026q2.085-2.083,4.165-4.172c.092-.092.178-.191.311-.334a9.481,9.481,0,0,1-5.059-1.805c-.181-.142-.368-.279-.534-.438a1.435,1.435,0,0,1-.2-2.041,1.445,1.445,0,0,1,1.914-.431,2.929,2.929,0,0,1,.419.247,8.3,8.3,0,0,0,9.193.085,2.479,2.479,0,0,1,.9-.462,1.405,1.405,0,0,1,1.61.642A1.359,1.359,0,0,1,21.942,17.576Z" fill="#8e9bad" /></svg>
        </button>
      </div>
      <button
        @click.prevent="$emit('updateActiveScreen', 'resetPassword')"
        class="authorization-modal__modal-link"
      >
        {{ $t('modal.authorization.logIn.resetPassword') }}
      </button>
    </div>
    <button
      :disabled="!emailValue || !passwordValue"
      class="authorization-modal__submit"
      type="submit"
    >
      {{ $t('modal.authorization.logIn.submit') }}
    </button>
    <p class="authorization-modal__footer">
      {{ $t('modal.authorization.logIn.footerMessage') }}
      <button
        @click.prevent="$emit('updateActiveScreen', 'createAccount')"
        class="authorization-modal__modal-link authorization-modal__modal-link--underline"
      >
        {{ $t('modal.authorization.logIn.footerLink') }}
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
      emailValue: 'anton@user.user',
      passwordValue: '123123123'
    }
  },
  methods: {
    logIn () {
      console.log('Log in form was clicked')

      this.$auth.loginWith('local', {
        data: {
          email: this.emailValue,
          password: this.passwordValue,
          logined_in: 'web'
        }
      })

      this.$parent.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.log-in-form__additional-actions {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.log-in-form__oauth-buttons {
  display: flex;
}

.log-in-form__oauth-button {
  cursor: pointer;
  display: inline-flex;

  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
