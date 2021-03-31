<template>
  <nav>
    <NanItem v-for="(item, key) in menu"
             :key="key"
             :to="item.to">
      {{ item.name }}
    </NanItem>
    <button class="btn btn-danger" @click="$emit('onLogout')">Выйти</button>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  components: {
    NanItem: () => import('@/components/NavItem')
  },
  props: {
    menu: {
      //дефолтное значение массива - функ возв пустой массив
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 100vh;
  width: 15vw;
  padding: 1rem;
  box-shadow: 14px 0 27px 9px rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
}
</style>
