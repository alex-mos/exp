<template>
  <div class="hello">
    <div class="holder">
        <ul>
            <li v-for="(data, index) in skills" :key="index">{{ index }}. {{ data.skill }}</li>
        </ul>
    </div>

    <div v-bind:class="{ alert: showAlert }">Alert</div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { 'skill': 'Vue.js' },
        { 'skill': 'Frontend developer' }
      ],
      showAlert: true
    }
  }
}
</script>

<style scoped>
    .alert {
        background-color: yellow;
        width: 100%;
        height: 30px;
    }
</style>
