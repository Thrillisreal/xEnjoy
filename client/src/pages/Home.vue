<template>
  <div>
    <div class="anime-contain" v-for="anime in animes" :key="anime.id">
      <div class="anime-card" @click="selectAnime(anime.id)">
        <Anime
          :anime="anime"
          :name="anime.attributes.canonicalTitle"
          :img="anime.attributes.posterImage.small"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Anime from '../components/Anime'
import axios from 'axios'
export default {
  name: 'AnimeDetails',
  components: {
    Anime
  },
  data: () => ({
    animes: []
  }),
  mounted() {
    this.getAnimes()
  },
  methods: {
    async getAnimes() {
      const res = await axios.get('https://kitsu.io/api/edge/anime')
      this.animes = res.data.data
    },
    selectAnime(animeId) {
      this.$router.push(`/details/${animeId}`)
    }
  }
}
</script>

<style scoped>
.anime-card{
  border: 2px solid black;
  width: 284px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  text-align: center;
}
.anime-card:hover{
  box-shadow: 0 8px 16px 0 #66FCF1
}
.anime-contain{
  display: flex:
  flex-wrap: wrap;
  
}
*{
  background-color: #0C0C10;
}
</style>