<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ count }} links</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Stats',

    computed: {
      ...mapGetters({
        count: 'countLinks'
      })
    }
  }
</script>

<style scoped>

</style>