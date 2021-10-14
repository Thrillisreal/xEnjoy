<template>
  <div>
  <div>
    <Anime/>
  </div>
  <div>
    <Comment/>
  </div>
  </div>
</template>

<script>
import Anime from '../components/Anime'
import Comment from '../components/Comment'
export default {
  name: 'Home',
  components: {
  Anime, 
  Comment
  }
  ,
  data: ()=>{

  }

}
</script>