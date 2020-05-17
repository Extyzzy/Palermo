<template>
  <div>
    <div
      class="expansion-header"
    >
      <div @click="update()" class="top-title-checkbox">
        <h3 class="title-checkboxes">
          {{ label }}
        </h3>
        <div v-bind:class="{'animateArrow': model, 'animateArrowbottom': !model}">
          <svg id="keyboard-arrow-down" xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
            <path id="Path_402" data-name="Path 402" d="M.946,58.65l3.108,3.108L7.162,58.65l.946.946L4.054,63.65,0,59.6Z" transform="translate(0 -58.65)" fill="#9097a9" />
          </svg>
        </div>
      </div>
      <slot v-if="model" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    opened: Boolean
  },
  data () {
    return {
      model: this.opened,
      st: true
    }
  },
  methods: {
    update () {
      this.model = !this.model
    }
  }
}
</script>

<style>
  @keyframes rotate {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(180deg); }
  }
  .animateArrow {
    align-items: center;
    display: inline-flex;
    animation-duration: 0.25s;
    animation-name: rotate;
    transform: rotate(180deg);
    transition-timing-function: linear;
  }
  @-webkit-keyframes rotate-bottom {
    0% { -webkit-transform: rotate(180deg); }
    100% { -webkit-transform: rotate(0deg); }
  }
  .animateArrowbottom {
    -webkit-animation-name: rotate-bottom;
    -webkit-animation-duration: 0.25s;
    -webkit-transition-timing-function: linear;
    transform: rotate(0deg);
  }
  .top-title-checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  .title-checkboxes {
    font-size: 16px;
    color: #3B4B68;
  }
  .expansion-header {
    margin-bottom: 30px;
  }
</style>
