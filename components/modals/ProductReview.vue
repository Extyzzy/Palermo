<template>
  <div class="product-review-modal">
    <h3 class="product-review-modal__title">
      Оставить отзыв о товаре
    </h3>
    <button @click="$emit('close')" class="product-review-modal__close">
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
    </button>
    <p class="product-review-modal__product-name">
      {{ productName }}
    </p>
    <div class="product-review-modal__rate-section">
      <p class="product-review-modal__text">
        Общая оценка товара
      </p>
      <div class="product-review-modal__stars">
        <svg data-name="Group 9679" xmlns="http://www.w3.org/2000/svg" width="150.891" height="26.004" viewBox="0 0 150.891 26.004"> <g id="mark-as-favorite-star"> <g id="star"> <path id="Path_1215" data-name="Path 1215" d="M13.686,33.653l8.458,5.1-2.238-9.62,7.466-6.47-9.842-.844-3.844-9.07L9.842,21.82,0,22.664l7.466,6.47-2.238,9.62Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> <g id="mark-as-favorite-star-2" data-name="mark-as-favorite-star" transform="translate(30.88)"> <g id="star-2" data-name="star"> <path id="Path_1215-2" data-name="Path 1215" d="M13.686,33.653l8.458,5.1-2.238-9.62,7.466-6.47-9.842-.844-3.844-9.07L9.842,21.82,0,22.664l7.466,6.47-2.238,9.62Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> <g id="mark-as-favorite-star-3" data-name="mark-as-favorite-star" transform="translate(61.759)"> <g id="star-3" data-name="star"> <path id="Path_1215-3" data-name="Path 1215" d="M13.686,33.653l8.458,5.1-2.238-9.62,7.466-6.47-9.842-.844-3.844-9.07L9.842,21.82,0,22.664l7.466,6.47-2.238,9.62Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> <g id="star-4" data-name="star" transform="translate(123.518)"> <path id="Path_1215-4" data-name="Path 1215" d="M13.686,33.653l8.458,5.1-2.238-9.62,7.466-6.47-9.842-.844-3.844-9.07L9.842,21.82,0,22.664l7.466,6.47-2.238,9.62Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> <g id="mark-as-favorite-star-4" data-name="mark-as-favorite-star" transform="translate(92.639)"> <g id="star-5" data-name="star"> <path id="Path_1215-5" data-name="Path 1215" d="M13.686,33.653l8.458,5.1-2.238-9.62,7.466-6.47-9.842-.844-3.844-9.07L9.842,21.82,0,22.664l7.466,6.47-2.238,9.62Z" transform="translate(0 -12.75)" fill="#ced6e0" /> </g> </g> </svg>
      </div>
      <p class="product-review-modal__hint">
        Поставьте оценку товару
      </p>
    </div>
    <div class="product-review-modal__review-fields">
      <div class="product-review-modal__review-field">
        <label for="textarea-advantages" class="product-review-modal__field-label">Достоинства</label>
        <textarea
          id="textarea-advantages"
          class="product-review-modal__field-textarea"
          name="textarea-advantages"
          cols="30"
          rows="10"
          placeholder="Что вам понравилось"
        />
      </div>
      <div class="product-review-modal__review-field">
        <label for="textarea-disadvantages" class="product-review-modal__field-label">Недостатки</label>
        <textarea
          id="textarea-disadvantages"
          class="product-review-modal__field-textarea"
          name="textarea-disadvantages"
          cols="30"
          rows="10"
          placeholder="Опишите минусы товара"
        />
      </div>
      <div class="product-review-modal__review-field">
        <label for="textarea-comment" class="product-review-modal__field-label">Комментарий</label>
        <textarea
          id="textarea-comment"
          class="product-review-modal__field-textarea"
          name="textarea-comment"
          cols="30"
          rows="10"
          placeholder="Напишите общие впечатления"
        />
      </div>
    </div>
    <button class="product-review-modal__field-submit" type="submit">
      ОТПРАВИТЬ ОТЗЫВ
    </button>
  </div>
</template>

<script>
export default {
  props: ['productName']
}
</script>

<style>
  .product-review-modal {
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    padding: 30px 45px 70px;
    position: relative;
  }

  .product-review-modal__title {
    color: #3B4B68;
    font-size: 18px;
    margin-bottom: 10px;
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

  .product-review-modal__product-name {
    color: #8E9BAD;
    font-size: 14px;
    margin-bottom: 25px;
  }

  .product-review-modal__rate-section {
    align-items: center;
    display: inline-flex;
    font-size: 14px;
    margin-bottom: 30px;
  }

  .product-review-modal__text {
    color: #3B4B68;
    margin-right: 30px;
  }

  .product-review-modal__stars {
    margin-right: 30px;
  }

  .product-review-modal__hint {
    color: #8E9BAD;
  }

  .product-review-modal__review-fields {
    margin-bottom: 50px;
  }

  .product-review-modal__review-field {
    align-items: flex-start;
    color: #3B4B68;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .product-review-modal__field-label {
    flex-shrink: 0;
    margin-top: 13px;
    width: 145px;
  }

  .product-review-modal__field-textarea {
    background-color: transparent;
    border: 1px solid #A4B0BE;
    border-radius: 5px;
    box-shadow: none;
    color: #3B4B68;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    height: 82px;
    overflow: auto;
    outline: none;
    padding: 13px 15px;
    resize: none;
    width: 100%;
  }

  .product-review-modal__field-textarea::placeholder {
    color: #8E9BAD;
  }

  .product-review-modal__field-submit {
    background-color: #E0E4ED;
    border: none;
    border-radius: 20px;
    color: #3B4B68;
    cursor: pointer;
    font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin-left: 145px;
    padding: 12px 35px;
  }
</style>
