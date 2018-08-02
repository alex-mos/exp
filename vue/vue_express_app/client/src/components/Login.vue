<template>
<v-flex xs6 offset-xs3>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title dark>
        Login
      </v-toolbar-title>
    </v-toolbar>

    <v-form @submit.prevent="login" class="pt-2 pr-4 pb-2 pl-4">
      <v-text-field
        v-model="email"
        label="email">
      </v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        type="password">
      </v-text-field>

      <v-btn
        type="submit"
        class="cyan"
        dark>
        Login
      </v-btn>
      <br>
      {{ error }}
    </v-form>
  </div>
</v-flex>
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
      async login () {
        this.error = null
        try {
          const response = await AuthenticationService.login({
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
