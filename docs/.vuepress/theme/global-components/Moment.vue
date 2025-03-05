<template>
  <div>
    <figure :class="momentClass">
      <Illustration :type=type :id=id />
      <figcaption class="sapIllus_Caption">
        <h3 class="sapIllus_CaptionHeader">{{ header }}</h3>
        <p class="sapIllus_CaptionMessage">{{ message }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    id: String,
    header: String,
    message: String
  },
  computed: {
    momentClass () {
      return `sapIllus sapIllus_${this.type.charAt(0).toUpperCase() + this.type.slice(1)}`
    },
  }
}
</script>

<style>

</style>
