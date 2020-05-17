<template>
  <div class="sizebox-container">
    <div :key="key" v-for="(checkbox, key) in values" class="md-checkbox">
      <div
        v-bind:style="{'background-color': checkbox.name}"
        @mouseover="specificColor = checkbox.name"
        class="size-block-color"
      >
        <span
          v-bind:style="{'opacity': checkbox.checked ? '1' : '0', 'border': `2px solid ${checkbox.name}`}"
          class="size-block-color-round"
        />
        <style>
          :root {
          --accent-color: {{ specificColor }}
          }
          .size-block-color > .size-block-color-round {
          border: 2px solid {{ checkbox.name }}
          }
          .size-block-color-round:hover {
          border: 2px solid var(--accent-color);
          }
        </style>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['fieldname', 'values', 'label', 'update', 'loading'],
  data () {
    return {
      specificColor: '#F6F8F9'
    }
  }
}
</script>

<style>
  .sizebox-container {
    width: 225px;
    display: flex;
    flex-wrap: wrap;
  }
 .size-block-color {
   position: relative;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   cursor: pointer;
   margin-right: 10px;
   border: 2px solid #f7f8f9;
 }
  .size-block-color-round {
    content: " ";
    position: absolute;
    opacity: 0;
    padding: 10px;
    top: -4px;
    right: -4px;
    border-radius: 50%;
  }
  .size-block-color-round:hover {
    opacity: 1 !important;
  }
</style>
