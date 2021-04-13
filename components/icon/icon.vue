<template>
  <svg aria-hidden="true"
       fill="currentColor"
       :style="styleObject"
       class="text-white group-hover:text-indigo-400">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: "IcwtIcon",
  props: {
    icon: {
      type: String,
      required: true,
      default: ''
    },
    size: {
      type: [String, Number],
      required: false,
      default: 32
    }
  },
  computed: {
    styleObject() {
      const style = {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
      return style
    }
  }
}
</script>

<style scoped>

</style>
