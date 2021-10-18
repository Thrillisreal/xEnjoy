<template>
  <div>
    <div>
      <img :src="img"/>
    </div>
    <div class="anime-name">
      <h3>{{name}}</h3>
    </div>
    <div>{{description}}</div>
  </div>
</template>

<script>
export default {
  name: 'Anime',
  data: ()=>({
    // anime: null
  }),
  props:{
    name: String,
    description: String,
    img: String
  }

}
</script>
<style scoped>
  .anime-name h3{
    color: white;
    background-color: #45A29E;
  }
</style>