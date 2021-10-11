<template>
  <div>
    <nav id="nav">
      <router-link to="/home"></router-link>
      <router-link to="/"></router-link>
      <router-link to="/signin">Login</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
