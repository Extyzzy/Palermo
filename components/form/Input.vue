<template>
  <div class="input-block">
    <div class="input-block__container">
      <input
        :autocomplete="autocomplete"
        :id="id"
        :spellcheck="spellcheck"
        :value="value"
        :type="type"
        @blur="isFocused = false"
        @focus="isFocused = true"
        @input="updateValue($event.target.value)"
        class="input-block__input"
      >
      <label
        :for="id"
        :class="{ 'input-block__label--transform': isFocused || value.length }"
        class="input-block__label"
      >
        {{ labelText }}
      </label>
    </div>
    <p
      v-if="errorMessage"
      class="input-block__error-message"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    autocomplete: {
      type: String,
      default: 'on',
      validator: value => (
        [
          'off',
          'on'
        ].includes(value)
      )
    },
    errorMessage: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    spellcheck: {
      type: String,
      default: 'false',
      validator: value => (
        [
          'false',
          'true'
        ].includes(value)
      )
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isFocused: false
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.input-block {
  padding: 10px 0 21px;
  position: relative;
}

.input-block:not(:last-child) {
  margin-bottom: 1px;
}

.input-block__container {
  position: relative;
}

.input-block__input {
  border: 1px solid #A4B0BE;
  border-radius: 5px;
  color: #3B4B68;
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 46px;
  padding: 0 13px;
  width: 100%;
}

.input-block__input:focus {
  border-color: #3B4B68;
}

.input-block__label {
  background-color: #FFFFFF;
  color: #8E9BAD;
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  left: 14px;
  padding: 0 5px;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: top left;
  transition: transform 150ms ease;
}

.input-block__label--transform {
  color: #3B4B68;
  transform: translateY(-29px) scale(0.8);
}

.input-block__error-message {
  bottom: 0;
  color: #F02C5A;
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  left: 0;
  position: absolute;
}
</style>
