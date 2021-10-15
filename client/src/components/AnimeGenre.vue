<template>
  <div >
    <div>
    <img :src="img">
    </div>
    <div >
      <h3>{{name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimeGenre',
   props:{
    name: String,
    img: String
  }
}
</script>