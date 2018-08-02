<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-items>
      <v-btn to="/" flat>TabTracker</v-btn>
    </v-toolbar-items>
    <!-- todo: to implement -->
    <!--<v-toolbar-items>-->
      <!--<v-btn flat>-->
        <!--Browse-->
      <!--</v-btn>-->
    <!--</v-toolbar-items>-->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn to="login" flat>Sign In</v-btn>
      <v-btn to="register" flat>Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>
