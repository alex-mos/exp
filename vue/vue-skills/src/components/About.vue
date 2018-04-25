<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Hello, {{ name }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum deleniti libero quod repellendus reprehenderit vel. Eaque fuga libero nihil, obcaecati perferendis recusandae voluptate? Natus nemo quas quo tenetur voluptate.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name
    }
  }
}
</script>