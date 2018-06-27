<template>
  <v-app>
    <PageHeader />

    <main>
      <v-container fluid>
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',

  components: {
    PageHeader
  }
}
</script>

<style>
  .container {
    padding-top: 100px !important;
  }
</style>
