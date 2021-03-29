<template>
  <Page>
    <h2>Товары</h2>
    <Card>
      <nuxt-link to="products/form"
                 class="btn btn-success">
        Добавить продукт
      </nuxt-link>
      <Table :actions="actions"
             :data="products"
             @onEdit="handleEdit"
             @onDelete="handleDelete"
             :columns="columns" />
    </Card>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { columns, actions } from '@/pages/products/setup'

export default {
  name: "ProductsPage",
  components: {
    Table: () => import('@/components/Table'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page')
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
      fetchProducts: 'products/fetchAll',
      deleteProduct: 'products/delete'
    }),
    handleEdit({ id }) {
      this.$router.push(`products/form/${id}`)
    },
    async handleDelete({ id }) {
      await this.deleteProduct(id)
      await this.fetchProducts()
    }
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
