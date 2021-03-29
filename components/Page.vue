<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Page.vue"
}
</script>

<style scoped>
.page {
  padding: 30px;
}
</style>
