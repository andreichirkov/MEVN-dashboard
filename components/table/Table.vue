<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <TableHeader>#</TableHeader>
<!--        тут из колонок берем имя-->
        <TableHeader v-for="({ name }, index) in columns" :key="index">
          {{ name }}
        </TableHeader>
        <TableHeader v-if="actions.length !== 0">Действия</TableHeader>
      </slot>
    </thead>

    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <TableCell>{{ index + 1 }}</TableCell>
<!--          проходимся по ключам(название, цена, кол-во)-->
          <TableCell v-for="({ key }, tdIndex) in columns" :key="`column-${tdIndex}`">
            {{ item[key] }}
          </TableCell>
          <TableCell v-for="({ className, emit, actionKey, label }, actionIndex) in actions" :key="`action-${actionIndex}`">
            <button :class="className"
                    @click="$emit(emit, { id: item[actionKey] })">
              {{ label }}
            </button>
          </TableCell>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    },
  },
  components: {
    TableHeader: () => import('./components/TableHeader'),
    TableCell: () => import('./components/TableCell')
  }
}
</script>

<style scoped>

</style>
