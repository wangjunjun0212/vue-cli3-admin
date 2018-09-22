<template>
  <section>
    <nav-bar></nav-bar>
    <div class="container">
      <div class="home-banner">
        <div class="home-banner-txt">
           <div class="my-image">
            <p>
              <img alt="logo" src="../assets/logo.png">
            </p>
           </div>
           <div></div>
        </div>
      </div>
    </div>
    <foot-info></foot-info>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import NavBar from '@/components/NavBar'
import FootInfo from '@/components/FootInfo'

export default {
  name: 'home',
  components: {
    NavBar,
    HelloWorld,
    FootInfo
  }
}
</script>
