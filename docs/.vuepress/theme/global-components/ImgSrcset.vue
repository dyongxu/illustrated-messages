<template>
  <div>
    <img class="block-image" :src="x1" :srcset="srcset" :alt="alt"/>
  </div>
</template>

<script>
export default {
  props: {
    x1: String,
    x2: String,
    alt: String
  },
  computed: {
    srcset () {
      return `${this.x2} 2x`
    }
  }
}
</script>

<style>

</style>
