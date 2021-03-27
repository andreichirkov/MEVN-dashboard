<template>
  <h2>This is cat page</h2>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "CategoriesPage",
  computed: {
    ...mapGetters({
      categories: 'categories/items'
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'products/fetchAll'
    }),
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<style scoped>

</style>
