<template>
  <div>
    <div v-for="(facet, key) in data" :key="key">
      <FacetContainer
        :label="facet.name"
        v-if="facet.type ==='checkbox' && facet.values.length"
        :opened="facet.expanded"
      >
        <CheckboxGroup
          :parent="facet.name"
          :fieldname="facet.name"
          :total="facet.total"
          :values="facet.values"
          :loading="loading"
          @update="update"
        />
      </FacetContainer>
      <FacetContainer
        :label="facet.name"
        v-if="facet.type ==='size' && facet.values.length"
        :opened="facet.expanded"
      >
        <SizeGroup
          :total="facet.total"
          :values="facet.values"
          :loading="loading"
          @update="update"
        />
      </FacetContainer>
      <FacetContainer
        :label="facet.name"
        v-if="facet.type === 'chart' && facet.values.data.length"
        :opened="facet.expanded || !('expanded' in facet)"
      >
        <Chart
          :data="facet.values.data"
          :maxPrice="facet.values.maxPrice"
        />
      </FacetContainer>
      <FacetContainer
        :label="facet.name"
        v-else-if="facet.type ==='radio' && facet.values.length"
        :opened="facet.expanded"
      >
        <RadioGroup
          :fieldname="facet.name"
          :total="facet.total"
          :values="facet.values"
          :loading="loading"
          @update="update"
        />
      </FacetContainer>
      <FacetContainer
        :label="facet.name"
        v-else-if="facet.type ==='range' && facet.values.length"
        :opened="facet.expanded"
      >
        <Range
          :fieldname="facet.name"
          :total="facet.total"
          :values="facet.values"
          :loading="loading"
          @update="update"
        />
      </FacetContainer>
      <FacetContainer
        :label="facet.name"
        v-else-if="facet.type ==='color' && facet.values.length"
        :opened="facet.expanded"
      >
        <ColorGroup
          :fieldname="facet.name"
          :total="facet.total"
          :values="facet.values"
          :loading="loading"
          @update="update"
        />
      </FacetContainer>
    </div>
  </div>
</template>

<script>
import Range from '../form/Range'
import CheckboxGroup from '../form/CheckboxGroup'
import RadioGroup from '../form/RadioGroup'
import SizeGroup from '../form/SizeGroup'
import ColorGroup from '../form/ColorGroup'
import Chart from '../form/Chart'
import FacetContainer from './FacetContainer'

export default {
  components: {
    FacetContainer,
    CheckboxGroup,
    RadioGroup,
    SizeGroup,
    Range,
    ColorGroup,
    Chart
  },
  props: ['data', 'loading'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
