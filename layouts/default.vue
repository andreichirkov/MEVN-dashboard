<template>
  <div class="app">
    <Nav :menu="menu" @onLogout="handleLogout"/>
    <div class="content">
      <main>
        <Nuxt />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import menu from './setup'

export default {
  name: "DefaultLayout",
  components: {
    Footer: () => import('@/components/layouts/Footer'),
    Nav: () => import('~/components/layouts/Nav')
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
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
//@import "/assets/styles/global.scss";
.app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85vw;
}

main {
  height: 90%;
  background: $main-bg;
}


</style>

