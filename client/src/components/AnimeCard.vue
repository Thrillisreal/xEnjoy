<template>
  <div >
    <div>
    <img :src="img">
    </div>
    <div>
      <h3>{{name}}</h3>
    </div>
    <div>
      <h3>{{description}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
  props:{
    name: String,
    img: String,
    description: String
  }
}
</script>