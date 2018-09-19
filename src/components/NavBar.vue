<template>
  <header class="nav-bar">
    <ul mode="horizontal" :router="true" :default-active="activeIndex" :class="{'login-status': $store.state.token}">
      <li index="/home">首页</li>
      <li index="/list">列表</li>
      <li index="/table">表格</li>
      <li index="/code">二维码展示</li>
    </ul>
    <div class="login-user" v-if="$store.state.token">
      Hello, {{ $store.state.user }}!
      <button type="text" @click="logOut" class="loginOut">log out</button>
    </div>
  </header>
</template>

<script>
export default {
  mounted () {
    console.log(this.$store.state.token)
  },
  data () {
    return {
      activeIndex: ''
    }
  },
  watch: {
    '$route' () {
      this.activeIndex = this.$route.path
    }
  },
  methods: {
    logOut () {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>
