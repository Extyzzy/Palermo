<template>
  <div>
    <LocalisationHeader />
    <ActionsHeader />
  </div>
</template>

<script>
import ActionsHeader from '~/components/Header/ActionsHeader'
import LocalisationHeader from '~/components/Header/LocalisationHeader'

export default {
  components: {
    ActionsHeader,
    LocalisationHeader
  }
}
</script>
