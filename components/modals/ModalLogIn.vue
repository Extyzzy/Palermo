<template>
  <div class="log-in-modal">
    <ButtonCloseModal />
    <h3 class="log-in-modal__logo">
      <span class="log-in-modal__logo--bold">Palermo</span>shopping
    </h3>
    <!-- <button @click="$emit('close')" class="product-review-modal__close">
      <svg
        id="close"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <rect
          id="Rectangle_170"
          data-name="Rectangle 170"
          width="20.566"
          height="2.061"
          transform="translate(0 14.543) rotate(-45)"
          fill="#8e9bad"
        />
        <rect
          id="Rectangle_171"
          data-name="Rectangle 171"
          width="20.566"
          height="2.053"
          transform="translate(14.543 15.996) rotate(-135)"
          fill="#8e9bad"
        />
      </svg>
    </button> -->
    <div v-if="activeAuthorizationModalTab === 'log-in'" class="log-in-modal__welcome-section">
      <h4 class="log-in-modal__welcome-title">
        {{ translations.trnsl_welcome }}
      </h4>
      <p class="log-in-modal__welcome-message">
        {{ translations.trnsl_please_auth }}
      </p>
    </div>
    <div v-if="activeAuthorizationModalTab === 'registration'" class="log-in-modal__welcome-section">
      <h4 class="log-in-modal__welcome-title">
        {{ translations.trnsl_register }}
      </h4>
      <p class="log-in-modal__welcome-message">
        {{ translations.trnsl_write_input_reg }}
      </p>
    </div>
    <div class="log-in-modal__form">
      <div class="log-in-modal__input-row">
        <Input
          id="email"
          v-if="activeAuthorizationModalTab === 'registration'"
          v-model="nameInputValue"
          autocomplete="off"
          label-text="Ваше имя"
          type="name"
        />
        <Input
          id="email"
          v-model="emailInputValue"
          autocomplete="off"
          label-text="Ваш E-mail"
          type="email"
        />
        <Input
          id="password"
          v-model="passwordInputValue"
          autocomplete="off"
          label-text="Пароль"
          type="password"
        />
        <!-- <input
          id="email"
          name="email"
          class="modal-input__input"
          type="email"
          autocomplete="off"
          value=""
        />
        <label class="modal-input__label" for="email">Ваш E-mail</label> -->
      </div>
    </div>
    <div v-if="activeAuthorizationModalTab === 'log-in'" class="log-in-modal__side-actions">
      <div class="log-in-modal__social-media-icons">
        <button class="log-in-modal__social-media-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M28.088,0H1.916A1.915,1.915,0,0,0,0,1.914V28.086A1.915,1.915,0,0,0,1.916,30h26.17A1.914,1.914,0,0,0,30,28.086V1.914A1.91,1.91,0,0,0,28.088,0Zm-3.2,18.28c.548.559,1.738,1.5,1.522,2.451-.2.876-1.507.557-2.778.608-1.45.061-2.31.093-3.182-.608A9.666,9.666,0,0,1,19.4,19.565c-.358-.4-.809-1.111-1.423-1.084-1.1.055-.758,1.592-1.15,2.64-6.131.965-8.593-2.822-10.765-6.5a55.683,55.683,0,0,1-2.572-5.6l4.336-.015s1.391,2.53,1.759,3.182a15.859,15.859,0,0,0,1.014,1.49c.3.411.771,1.215,1.287,1.15.84-.108.993-3.368.472-4.461-.207-.442-.7-.6-1.219-.747.174-1.1,4.863-1.325,5.621-.474,1.1,1.236-.762,4.679.745,5.682,2.117-1.109,3.925-5.754,3.925-5.754l5.077.032a16.267,16.267,0,0,1-1.626,3.624c-.485.652-2.094,2.1-2.03,3.182C22.9,16.765,24.212,17.594,24.885,18.28Z" fill="#8e9bad" /></svg>
        </button>
        <button class="log-in-modal__social-media-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M28.343,0H1.656A1.656,1.656,0,0,0,0,1.657V28.344A1.656,1.656,0,0,0,1.656,30H16.024V18.383H12.114V13.855h3.909V10.516c0-3.874,2.366-5.985,5.822-5.985a32.425,32.425,0,0,1,3.493.178v4.05h-2.4c-1.88,0-2.242.894-2.242,2.2v2.89h4.484L24.6,18.381H20.7V30h7.644A1.657,1.657,0,0,0,30,28.344V1.656A1.656,1.656,0,0,0,28.343,0Z" transform="translate(0 -0.001)" fill="#8e9bad" /></svg>
        </button>
        <button class="log-in-modal__social-media-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M40.564,24.694A3.023,3.023,0,1,0,37.523,21.7,3,3,0,0,0,40.564,24.694Z" transform="translate(-25.547 -12.697)" fill="#8e9bad" /><path d="M28.4,0H1.6A1.6,1.6,0,0,0,0,1.6V28.4A1.6,1.6,0,0,0,1.6,30H28.4A1.6,1.6,0,0,0,30,28.4V1.6A1.6,1.6,0,0,0,28.4,0ZM15.026,2.8a6.176,6.176,0,1,1-6.2,6.162A6.179,6.179,0,0,1,15.026,2.8Zm6.917,14.779A7.425,7.425,0,0,1,19.269,19.3a12.608,12.608,0,0,1-3.036.68c.156.17.23.253.327.352,1.406,1.412,2.817,2.819,4.218,4.235a1.394,1.394,0,0,1,.314,1.642,1.664,1.664,0,0,1-1.562.974,1.524,1.524,0,0,1-.987-.5c-1.061-1.068-2.142-2.115-3.18-3.2-.3-.317-.448-.258-.715.018q-1.6,1.648-3.241,3.255a1.361,1.361,0,0,1-1.641.294,1.659,1.659,0,0,1-.958-1.529,1.53,1.53,0,0,1,.514-1.026q2.085-2.083,4.165-4.172c.092-.092.178-.191.311-.334a9.481,9.481,0,0,1-5.059-1.805c-.181-.142-.368-.279-.534-.438a1.435,1.435,0,0,1-.2-2.041,1.445,1.445,0,0,1,1.914-.431,2.929,2.929,0,0,1,.419.247,8.3,8.3,0,0,0,9.193.085,2.479,2.479,0,0,1,.9-.462,1.405,1.405,0,0,1,1.61.642A1.359,1.359,0,0,1,21.942,17.576Z" fill="#8e9bad" /></svg>
        </button>
      </div>
      <button class="log-in-modal__modal-link">
        {{ translations.trnsl_forget_password }} ?
      </button>
    </div>
    <button
      v-if="activeAuthorizationModalTab === 'log-in'"
      :disabled="!emailInputValue || !passwordInputValue"
      class="modal-authorization__submit-button"
      type="submit"
    >
      {{ translations.trnsl_login }}
    </button>
    <button
      v-if="activeAuthorizationModalTab === 'registration'"
      :disabled="!emailInputValue || !passwordInputValue"
      class="modal-authorization__submit-button"
      type="submit"
    >
      {{ translations.trnsl_create_acc }}
    </button>
    <p v-if="activeAuthorizationModalTab === 'log-in'" class="modal-authorization__registration-call">
      {{ translations.trnsl_have_acc }} ? <button class="modal-authorization__registration-button">
        {{ translations.trnsl_za_reg }}
      </button>
    </p>
    <p v-if="activeAuthorizationModalTab === 'registration'" class="modal-authorization__registration-call">
      {{ translations.trnsl_back_to }} <button class="modal-authorization__registration-button" />
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonCloseModal from '@/components/modals/ButtonCloseModal'
import Input from '@/components/form/Input'

export default {
  name: 'ModalLogIn',
  components: {
    ButtonCloseModal,
    Input
  },
  props: ['authorizationForm'],
  data () {
    return {
      activeAuthorizationModalTab: this.authorizationForm,
      nameInputValue: '',
      emailInputValue: '',
      passwordInputValue: ''
    }
  },
  computed: {
    ...mapGetters({
      translations: 'app/translations'
      // url: 'app/url'
    })
  }
}
</script>

<style>
  .log-in-modal {
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    padding: 30px 45px 70px;
    position: relative;
  }

  .log-in-modal__logo {
    color: #3B4B68;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 50px;
    text-align: center;
  }

  .log-in-modal__logo--bold {
    font-weight: 800;
  }

  .product-review-modal__close {
    background-color: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
    padding: 0;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .log-in-modal__welcome-section {
    margin-bottom: 35px;
    text-align: center;
  }

  .log-in-modal__welcome-title {
    color: #3B4B68;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .log-in-modal__welcome-message {
    color: #3B4B68;
    font-size: 12px;
  }

  .log-in-modal__form {
    margin-bottom: 20px;
  }

  .log-in-modal__input-row {
    position: relative;
  }

  .modal-input__input {
    border: 1px solid #A4B0BE;
    border-radius: 5px;
    font-size: 14px;
    height: 46px;
    padding: 0 11px;
    width: 100%;
  }

  .modal-input__input:focus + .modal-input__label,
  .modal-input__label--has-value {
    transform: translate(-8px, -32px) scale(0.93);
  }

  .modal-input__label {
    background-color: #ffffff;
    color: #8E9BAD;
    left: 14px;
    padding: 0 3px;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 150ms ease;
  }

  .log-in-modal__side-actions {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .log-in-modal__social-media-icons {
    display: flex;
  }

  .log-in-modal__social-media-button {
    cursor: pointer;
    display: inline-flex;
  }

  .log-in-modal__social-media-button:not(:last-child) {
    margin-right: 10px;
  }

  .modal-link {
    color: #1769FF;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  .modal-link:active,
  .modal-link:hover {
    text-decoration: underline;
  }

  .modal-authorization__submit-button {
    background-color: #E0E4ED;
    border: none;
    border-radius: 20px;
    color: #3B4B68;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 800;
    margin: 0 auto 30px;
    padding: 12px 35px;
    width: 100%;
  }

  .modal-authorization__submit-button:hover {
    background-color: #8E9BAD;
    color: #FFFFFF;
  }

  .modal-authorization__submit-button:active {
    background-color: #637188;
  }

  .modal-authorization__submit-button:disabled {
    background-color: #E0E4ED;
    color: #8E9BAD;
    cursor: auto;
  }

  .modal-authorization__registration-call {
    color: #3B4B68;
    text-align: center;
  }

  .modal-authorization__registration-button {
    color: #1769FF;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    text-decoration: underline;
  }
</style>
