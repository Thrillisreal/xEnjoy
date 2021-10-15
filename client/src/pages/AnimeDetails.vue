<template>
<div></div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'AnimeDetails',
  data: ()=>({
  animeDetails: null
  }),
  mounted(){
  this.getAnimeDetails()
  },
  methods:{
    async getAnimeDetails() {
      const animeId = parseInt(this.$route.params.anime_id)
      const res = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`)
      console.log(res)
      this.animeDetails = res.data
    },
  }
}
</script>