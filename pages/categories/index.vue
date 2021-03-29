<template>
  <Page>
    <h2>{{ config.name }}</h2>
    <Card>
      <nuxt-link :to="`${config.crudName}/form`"
                 class="btn btn-success">
        Добавить {{ config.singleName }}
      </nuxt-link>
      <Table :actions="actions"
             :data="items"
             @onEdit="handleEdit"
             @onDelete="handleDelete"
             :columns="columns" />
    </Card>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { columns, actions, config } from '@/pages/categories/setup'

export default {
  name: config.pageName,
  components: {
    Table: () => import('@/components/Table'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page')
  },
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`
    }),
  },
  data() {
    return {
      columns,
      actions,
      config
    }
  },
  methods: {
    ...mapActions({
      fetchItems: `${config.crudName}/fetchAll`,
      deleteItem: `${config.crudName}/delete`
    }),
    handleEdit({ id }) {
      this.$router.push(`${config.crudName}/form/${id}`)
    },
    async handleDelete({ id }) {
      await this.deleteItem(id)
      await this.fetchItems()
    }
  },
  mounted() {
    this.fetchItems()
  }
}
</script>

<style scoped>

</style>
