<template>
  <div class="fixed z-30 inset-y-0 left-0 w-64 bg-gray-900 overflow-y-auto lg:static lf:inset-0">
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <span class="text-2xl mx-2 font-bold text-white"> Dashboard </span>
      </div>
    </div>
    <nav class="mt-10">
      <nav-item v-for="(item, key) in menu" :to="item.to" :key="key">
        {{ item.name }}
      </nav-item>
    </nav>
  </div>

</template>

<script>
export default {
  name: "Nav",
  components: {
    NavItem: () => import('@/components/layouts/Navigation/NavItem')
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
//nav {
//  height: 100vh;
//  width: 15vw;
//  padding: 1rem;
//  box-shadow: 14px 0 27px 9px rgba(255, 255, 255, 0.8);
//  display: flex;
//  flex-direction: column;
//}
</style>
