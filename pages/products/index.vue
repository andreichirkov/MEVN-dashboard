<template>
  <Page :title="config.name">
    <nuxt-link :to="`${config.crudName}/form`"
               class="btn btn-success">
      <icon icon="icwt-user-add" />
      Добавить {{ config.singleName }}
    </nuxt-link>
    <TablePageWrapper>
      <Table :actions="actions"
             :data="items"
             @onEdit="handleEdit"
             @onDelete="handleDelete"
             :columns="columns" />
    </TablePageWrapper>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import { columns, actions, config } from './setup'

export default {
  name: config.pageName,
  middleware: 'auth',
  components: {
    Table: () => import('@/components/table/Table'),
    TablePageWrapper: () => import('@/components/TablePageWrapper'),
    Page: () => import('@/components/Page'),
    Icon: () => import('@/components/icon/icon')
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
