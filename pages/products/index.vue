<template>
  <div>
    <h2>Товары</h2>
    <nuxt-link to="products/form" class="btn btn-success">Добавить продукт</nuxt-link>
    <Table :actions="actions"
           :data="products"
           @onEdit="handleEdit"
           :columns="columns" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

import Table from '@/components/Table'

import { columns, actions } from '@/pages/products/setup'

export default {
  name: "ProductsPage",
  components: {
    Table
  },
  computed: {
    ...mapGetters({
      products: 'products/items'
    }),
  },
  data() {
    return {
      columns,
      actions
    }
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchAll'
    }),
    handleEdit() {
      console.log('изменяем')
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
