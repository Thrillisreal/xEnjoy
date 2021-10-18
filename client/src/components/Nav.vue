<template>
  <div>
    <nav id="nav">
      <router-link to="/home"><span>xEnjoy</span></router-link>
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
span{
  float: left;
  padding-left: 40px;
}
#nav router-link-exact-active{
  margin-left: 10px;
}
</style>
