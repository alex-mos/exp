<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ count }} links</p>

    <button @click="removeAll">Remove all links</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'Stats',
    data () {
      return {
        msg: ''
      }
    },
    computed: {
      ...mapGetters({
        count: 'countLinks'
      })
    },
    methods: {
      ...mapMutations([
        'REMOVE_ALL_LINKS'
      ]),
      ...mapActions([
        'removeAllLinks'
      ]),
      removeAll () {
        this.removeAllLinks().then(() => {
          this.msg = 'Links are removed!'
        })
      }
    }
  }
</script>

<style scoped>

</style>