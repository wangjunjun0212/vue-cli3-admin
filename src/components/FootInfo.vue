<template>
  <footer class="foot-info">
    <p>Update: {{ time}}</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      time: Date.now()
    }
  }
}
</script>
