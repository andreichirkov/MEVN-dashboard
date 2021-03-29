<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th>#</th>
<!--        тут из колонок берем имя-->
        <th v-for="({ name }, index) in columns" :key="index">
          {{ name }}
        </th>
        <th v-if="actions.length !== 0">Действия</th>
      </slot>
    </thead>

    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td>{{ index + 1 }}</td>
<!--          проходимся по ключам(название, цена, кол-во)-->
          <td v-for="({ key }, tdIndex) in columns" :key="`column-${tdIndex}`">
            {{ item[key] }}
          </td>
          <td v-for="({ className, emit, actionKey, label }, actionIndex) in actions" :key="`action-${actionIndex}`">
            <button :class="className"
                    @click="$emit(emit, { id: item[actionKey] })">
              {{ label }}
            </button>
          </td>
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
  }
}
</script>

<style scoped>

</style>
