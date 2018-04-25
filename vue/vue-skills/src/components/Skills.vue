<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Enter a skill you have..."
          autofocus
          v-model="skill"
          v-validate="'min:5'"
          name="skill">

        <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>

      <ul>
        <transition-group enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutLeft">
          <li v-for="(data, index) in skills" :key="index">
            {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="removeSkill(index)"></i>
          </li>
        </transition-group>
      </ul>
    </div>

    <p>These are all skills that you possess.</p>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
    data() {
      return {
        skill: '',
        skills: [
          { 'skill': 'Vue.js' },
          { 'skill': 'Frontend developer' }
        ]
      }
    },
    methods: {
      addSkill() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.skills.push({ 'skill': this.skill })
            this.skill = ''
          } else {
            console.log('not valid');
          }
        })
      },
      removeSkill(index) {
        this.skills.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0 0 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
    outline: none;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: block;
    position: absolute;
    padding: 5px;
    margin-top: -20px;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }
</style>
