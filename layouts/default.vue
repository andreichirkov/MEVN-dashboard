<template>
  <div class="flex h-screen bg-gray-200">
    <Nav :menu="menu"/>
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header @onLogout="handleLogout" />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <Nuxt />
      </main>
<!--      <Footer />-->
    </div>
    <IconRegistry />
  </div>
</template>

<script>
import menu from './setup'

export default {
  name: "DefaultLayout",
  components: {
    // Footer: () => import('@/components/layouts/Footer'),
    Nav: () => import('@/components/layouts/Navigation/Nav'),
    Header: () => import('@/components/layouts/Header'),
    IconRegistry: () => import('@/components/icon/icon-registry')
  },
  data() {
    return {
      menu
    }
  },
  methods: {
    async handleLogout() {
      localStorage.clear()
      await this.$auth.logout()
      await this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
//@import "/assets/styles/global.scss";
//.app {
//  height: 100vh;
//  width: 100vw;
//  margin: 0;
//  display: flex;
//  flex-direction: row;
//}
//
//.content {
//  display: flex;
//  flex-direction: column;
//  height: 100vh;
//  width: 85vw;
//}
//
//main {
//  height: 90%;
//  background: $main-bg;
//}


</style>

