<template>
  <section>
    <nav-bar></nav-bar>
    <div class="home nav-bar">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="首页"/>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import NavBar from '@/components/NavBar'

export default {
  name: 'home',
  components: {
    NavBar ,
    HelloWorld
  },
  mounted () {
    console.log(this.$store.state.token)
  }
}
</script>
