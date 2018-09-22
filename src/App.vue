<template>
  <section id="app">
    <transition name="fade" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
    <!-- <foot-info></foot-info> -->
  </section>
</template>

<script>
import FootInfo from './components/FootInfo'

export default {
  components: { FootInfo }
}
</script>

<style lang="scss">
@import "./assets/scss/docs";
</style>
