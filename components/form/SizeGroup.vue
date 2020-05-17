<template>
  <div class="sizebox-container">
    <div :key="key" v-for="(checkbox, key) in values" class="md-checkbox">
      <span v-bind:class="{'checked-size-block': checkbox.checked}" class="size-block">
        {{ checkbox.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['fieldname', 'values', 'label', 'update', 'loading'],
  data () {
    return {
      model: []
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
  .sizebox-container {
    width: 225px;
    display: flex;
  }
 .size-block {
   padding: 5px 10px;
   border: 1px solid #3B4B68;
   border-radius: 5px;
   background-color: white;
   cursor: pointer;
   margin-right: 10px;
 }
  .size-block:hover, .checked-size-block {
    background-color: #3B4B68;
    color: white;
  }
</style>
