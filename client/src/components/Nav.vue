<template>
  <div>
    <nav id="nav">
      <router-link to="/home">xEnjoy</router-link>
      <router-link to="/"></router-link>
      <router-link to="/signin">Login</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about" name='About'>About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
<style scoped>
#nav {
  text-align: right;
  padding-right: 60px;
}
</style>
