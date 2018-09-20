<template>
  <section>
    <nav-bar></nav-bar>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'about',
  components: {
    NavBar ,
  }
}
</script>
