<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="首页"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'

export default {
  mounted () {
    console.log(this.$store.state.token)
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
