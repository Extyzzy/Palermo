<template>
  <div class="checkbox-container">
    <div :key="checkbox.id" v-for="checkbox in checkBoxesValue" class="md-checkbox">
      <input
        :id="checkbox.id"
        v-bind:checked="checkbox.checked"
        v-bind:disabled="checkbox.disabled"
        v-on:change="updated(checkbox, $event)"
        type="checkbox"
      >
      <label :for="checkbox.id" class="label">{{ checkbox.name }}</label>
      <span class="total">({{ checkbox.total }})</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['parent', 'values', 'label', 'update', 'loading'],
  data () {
    return {
      model: [],
      checkBoxesValue: [
        ...this.values
      ]
    }
  },
  created () {
  },
  methods: {
    updated (value, event) {
      const checkbox = this.checkBoxesValue[this.checkBoxesValue.findIndex(data => data.id === value.id)]
      const urlquery = { ...this.$route.query }

      console.log('checkboxes', checkbox)
      console.log('query', urlquery)

      if (event.target.checked) {
        console.log('checked')
        checkbox.checked = true

        if (urlquery.hasOwnProperty(`${this.parent}[]`)) {
          console.log('added value to existent query')
          urlquery[`${this.parent}[]`] = [ ...urlquery[`${this.parent}[]`], value.id ]
        } else {
          urlquery[`${this.parent}[]`] = [ value.id ]
        }

        this.$router.push({ query: { ...urlquery } })
      } else {
        console.log('unchecked')
        checkbox.checked = false

        if (!urlquery.hasOwnProperty(`${this.parent}[]`)) {
          return
        } else if (urlquery[`${this.parent}[]`].length === 1) {
          delete urlquery[`${this.parent}[]`]
        } else {
          urlquery[`${this.parent}[]`] = urlquery[`${this.parent}[]`].filter(el => el !== value.id)
        }

        this.$router.push({ query: { ...urlquery } })
      }
    }
  }
  // watch: {
  //   $route (to, from) {
  //     console.log('TO', to)
  //     console.log('FROM', from)
  //   }
  // }
}
</script>

<style scoped>
  .label {
    color: #3B4B68;
  }
  .total {
    color: #8E9BAD;
    font-style: italic;
  }
  .md-checkbox {
    position: relative;
    margin: 1em 0;
    text-align: left;
  }
  .md-checkbox.md-checkbox-inline {
    display: inline-block;
  }
  .md-checkbox label {
    cursor: pointer;
    display: inline;
    line-height: 1.25em;
    vertical-align: top;
    clear: both;
    padding-left: 1px;
  }
  .md-checkbox label:not(:empty) {
    padding-left: 0.75em;
  }
  .md-checkbox label:before, .md-checkbox label:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
  }
  .md-checkbox label:before {
    width: 1.25em;
    height: 1.25em;
    background: #fff;
    border: 2px solid rgba(0, 0, 0, 0.54);
    border-radius: 0.125em;
    cursor: pointer;
    transition: background .3s;
  }
  .md-checkbox input[type="checkbox"] {
    outline: 0;
    visibility: hidden;
    width: 1.25em;
    margin: 0;
    display: block;
    float: left;
    font-size: inherit;
  }
  .md-checkbox input[type="checkbox"]:checked + label:before {
    background: #3B4B68;
    border: none;
  }
  .md-checkbox input[type="checkbox"]:checked + label:after {
    transform: translate(0.25em, 0.3365384615em) rotate(-45deg);
    width: 0.75em;
    height: 0.375em;
    border: 0.125em solid #fff;
    border-top-style: none;
    border-right-style: none;
  }
  .md-checkbox input[type="checkbox"]:disabled + label:before {
    border-color: rgba(0, 0, 0, 0.26);
  }
  .md-checkbox input[type="checkbox"]:disabled:checked + label:before {
    background: rgba(0, 0, 0, 0.26);
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }

</style>
