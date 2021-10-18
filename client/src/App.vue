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
import './css/index.css'
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
  margin-left: 10px;
}
#nav{
  background-color: black;
  margin-bottom: 10px;
}
#app{
  font-family: Prompt;
}



</style>
