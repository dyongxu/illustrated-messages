<template>
  <div>
    <svg class="sapIllus_Image" role="img">
      <use
        :href="href"></use>
    </svg>
  </div>

</template>

<script>
export default {
  props: {
    type: String,
    id: String
  },
  computed: {
    href () {
      return `#sapIllus-${this.type.charAt(0).toUpperCase() + this.type.slice(1)}-${this.id}`
    },
  }
}
</script>

<style scoped>

</style>
