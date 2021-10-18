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

#nav a {
  font-weight: bold;
  color: #66FCF1;
  margin-left: 10px;
}
#nav{
  background-color: #1F2833;
   padding: 15px;
}
#app{
  font-family: Prompt;
}



</style>
