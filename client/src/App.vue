<template>
  <div id="app">
    <Nav />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style>
#app 

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
