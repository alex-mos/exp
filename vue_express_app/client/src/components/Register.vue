<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    // watch example
    // watch: {
    //   email (value) {
    //     console.log('email has changed', value)
    //   }
    // },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
    // mount example
    // mounted () {
    //
    // }
  }
</script>

<style scoped>

</style>
