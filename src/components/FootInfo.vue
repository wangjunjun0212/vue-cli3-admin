<template>
  <footer class="foot-info">
    <p>Update: {{ time}}</p>
  </footer>
</template>

<script>
export default {
  name: 'FootInfo',
  data () {
    return {
      time: Date.now()
    }
  }
}
</script>
