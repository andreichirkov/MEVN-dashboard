<template>
  <nuxt-link class="flex items-center mt-2 py-2 px-6 text-gray-100 no-underline hover:text-gray-100 hover:bg-gray-700"
             :class="{ 'bg-gray-600 border-l-4': active }"
             :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    //path это например все что после / например categories
    active: ({ $route: { path }, to }) => {
      console.log('path', path)
      console.log('to', to)
      return  path === to
    }
  }
}
</script>

<style lang="scss" scoped>
//.link {
//  padding: 10px;
//  margin-bottom: 10px;
//  color: $link-color;
//}
//
//.nuxt-link-active {
//  color: $link-color-active;
//}
</style>
