<template>
  <div class="card">
<!--slot тут принимает <CrudForm> из _id.vue-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style lang="scss" scoped>
  .card {
    padding: 10px;
  }
</style>
