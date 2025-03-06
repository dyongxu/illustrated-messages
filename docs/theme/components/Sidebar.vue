<template>
  <div class="sticky">
    <slot name="top"/>
    <TocLinks :depth="1" :items="items"/>
    <slot name="bottom"/>
  </div>
</template>

<script>
import TocLinks from '@theme/components/TocLinks.vue'

export default {
  name: 'Sidebar',

  components: { TocLinks },

  props: ['items']
}
</script>

<style>

</style>
