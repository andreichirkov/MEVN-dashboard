<template>
  <h2>This is pr page</h2>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ProductsPage",
  computed: {
    ...mapGetters({
      products: 'products/items'
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAll'
    }),
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
