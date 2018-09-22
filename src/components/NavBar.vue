<template>
  <header>
    <ul :router="true" :class="{'login-status': $store.state.token}">
      <li @click="home">首页</li>
      <li @click="about">about</li>
    </ul>
    <div class="login-user" v-if="$store.state.token">
      Hello, {{ $store.state.user }}!
      <button type="text" @click="logOut" class="loginOut">log out</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
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
    },
    about () {
      this.$router.push('/about')
    },
    home () {
      this.$router.push('/home')
    }
  }
}
</script>
