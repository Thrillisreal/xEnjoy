<template>
  <div>
  <div  v-for="anime in animes" :key="anime.id">
    <div  @click="selectAnime(anime.id)">
    <Anime :anime="anime" :name="anime.attributes.canonicalTitle" :img="anime.attributes.posterImage.small" :description="anime.attributes.description"/>
    </div>
  </div>
  <div>
  <!-- <button @click='getAnimes'>Get animes</button> -->
  </div>
  <div>
    <Comment/>
  </div>
  </div>
</template>

<script>
import Anime from '../components/Anime'
import Comment from '../components/Comment'
import axios from 'axios'
export default {
  name: 'AnimeDetails',
  components: {
  Anime, 
  Comment
  }
  ,
  data: ()=>({
    animes: []
  }),
  mounted(){
  this.getAnimes()
  },
  methods: {
     async getAnimes() {
      const res = await axios.get('https://kitsu.io/api/edge/anime')
      console.log(res.data.data)
      this.animes = res.data.data
    },
     selectAnime(animeId) {
      this.$router.push(`/details/:anime_id${animeId}`)
    }
  }

}
</script>