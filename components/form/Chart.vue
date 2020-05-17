<template>
  <div class="chart">
    <div class="chart-container">
      <span class="chart-background" />
      <span
        v-bind:style="{
          left: computedChartFillOffset,
          right: computedChartFillOffsetEnd,
          transition: transition
        }"
        class="chart-fill"
      />
      <TrendChart :datasets="datasets" :interactive="false" :min="0" :padding="padding" />
    </div>
    <div class="slider-container">
      <vue-slider
        :adsorb="true"
        :duration="0.2"
        :height="5"
        :max="maxPrice"
        :min="0"
        v-on:dragging="onSliderDrag"
        v-on:change="onSliderClick"
        v-model="sliderValue"
      />
    </div>
    <div class="actions">
      <form class="actions__form">
        <div class="actions__inputs">
          <input type="number" class="actions__input">
          <div class="actions__line">
            <span class="actions__line-figure" />
          </div>
          <input type="number" class="actions__input">
          <span class="actions__currency">руб.</span>
        </div>
        <button @click="handleChartSubmit" type="submit" class="actions__submit">
          ПРИМЕНИТЬ
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/antd.css'
import TrendChart from 'vue-trend-chart'

export default {
  components: {
    TrendChart,
    VueSlider
  },
  props: {
    maxPrice: Number,
    data: Array
  },
  data () {
    const maxQuantityNumber = Math.max(...this.data.map(data => data[1]))
    this.data.unshift([0, 0])
    return {
      chartFillOffset: 0,
      chartFillOffsetEnd: 0,
      transition: '',
      // sliderValue: [0, 0],
      sliderValue: [0, this.maxPrice],
      sliderMaxValue: 175,
      datasets: [
        {
          // data: [0, 50, 25, 28, 10, 8, 5, 2, 1],
          // data: [50, 0, 25, 22, 40, 42, 45, 48, 49],
          data: this.data.map(data => maxQuantityNumber - data[1]),
          smooth: true,
          showPoints: false,
          fill: true,
          className: 'curve1'
        }
      ],
      grid: {
        verticalLines: false,
        horizontalLines: false
      },
      labels: {
        xLabels: 0,
        yLabels: 0
      },
      padding: '5 0 0',
      tooltipData: null,
      popper: null,
      popperIsActive: false
    }
  },
  computed: {
    computedChartFillOffset () {
      return `${this.chartFillOffset}%`
    },
    computedChartFillOffsetEnd () {
      return `${this.chartFillOffsetEnd}%`
    }
  },
  methods: {
    handleChartSubmit (e) {
      e.preventDefault()
    },
    updateValues (value) {
      this.chartFillOffset = (value[0] * 100) / this.maxPrice
      this.chartFillOffsetEnd = Math.abs((value[1] * 100) / this.maxPrice - 100)
    },
    onSliderDrag (value) {
      this.updateValues(value)
      this.transition = ''
    },
    onSliderClick (value) {
      this.updateValues(value)
      this.transition = 'left 200ms ease, right 200ms ease'
    }
  }
}
</script>

<style>
.actions__submit {
  background-color: #E0E4ED;
  border: none;
  border-radius: 20px;
  color: #3B4B68;
  cursor: pointer;
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  padding: 11px 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}
.actions__line {
  align-items: center;
  display: flex;
  justify-content: center;
}
.actions__line-figure {
  background-color: #3B4B68;
  display: inline-flex;
  height: 1px;
  width: 4px;
}
.actions__currency {
  color: #3B4B68;
  padding-right: 3px;
}
.actions__inputs {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.actions__input {
  background-color: #ffffff;
  border: 1px solid #8E9BAD;
  border-radius: 5px;
  color: #3B4B68;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  width: 83px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

.chart {
  position: relative;
}

.chart-container,
.upper-chart-container {
  position: relative;
  transform: scaleY(-1);
  width: 203px !important;
}

.chart-background,
.chart-fill {
  background-color: #e0e4ed;
  bottom: 0;
  content: '';
  height: 55px;
  left: 0%;
  position: absolute;
  right: 0%;
  top: 0;
  z-index: -1;
}

.chart-fill {
  background-color: #9cbef5;
}

.vtc {
  height: 55px !important;
}

.chart-container .curve1 > .stroke {
  stroke-width: 0;
}

.chart-container .curve1 > .fill {
  fill: #f6f8f9;
  opacity: 1;
}

.slider-container {
  position: relative;
  top: -8px;
  margin-bottom: 22px;
  width: 203px;
}

.vue-slider-rail {
  background-color: #e0e4ed;
  border-radius: 3px;
}

.vue-slider-process,
.vue-slider:hover .vue-slider-process {
  background-color: #3b4b68;
}

.vue-slider:hover .vue-slider-dot-handle {
  border-color: #8e9bad;
}

.vue-slider-dot {
  height: 23px !important;
  width: 23px !important;
}

.vue-slider-dot-handle {
  background-color: #fff;
  border: 2px solid #8e9bad;
  position: relative;
}

.vue-slider-dot-handle::after {
  background-color: #3b4b68;
  border-radius: 50%;
  content: '';
  height: 11px;
  left: 0;
  margin: 4px auto;
  position: absolute;
  right: 0;
  width: 11px;
}

.vue-slider:hover .vue-slider-dot-handle:hover {
  border-color: #8e9bad;
}

.vue-slider-dot-handle-focus {
  box-shadow: 0 0 0 5px rgba(59, 75, 104, 0.2);
}
</style>
