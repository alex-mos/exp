<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
            Register
          </v-toolbar-title>
        </v-toolbar>

        <form @submit.prevent="register" class="pt-2 pr-4 pb-2 pl-4">
          <h1>Register</h1>
          <input type="email" name="email" v-model="email" placeholder="email">
          <br>
          <input type="password" name="password" v-model="password" placeholder="password">
          <br>
          <v-btn
            type="submit"
            class="cyan">
            Register
          </v-btn>
          <br>
          {{ error }}
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        this.error = null
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          console.log(response.data)
        } catch (err) {
          this.error = err.response.data.error
        }
      }
    }
  }
</script>

<style scoped>

</style>
