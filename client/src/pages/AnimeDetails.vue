<template>
<div>
  <div>
    <div>
      <img :src="animeDetails.attributes.coverImage.small"/>
    </div>
    <div>
    <h3>{{animeDetails.attributes.canonicalTitle}}</h3>
    </div>
    <div>
      <p>Description:</p>
      <p>{{animeDetails.attributes.description}}</p>
    </div>
    <div>
      <p>Age Rating:</p>
      <p>{{animeDetails.attributes.ageRatingGuide}}</p>
    </div>
    <div>
      <p>Rating:</p>
      <p>{{animeDetails.attributes.averageRating}}</p>
    </div>
  </div>
  <!-- <button @click="saveAnimeDetails()">Bookmark</button> -->
  <Comment />
</div>
</template>


<script>
import axios from 'axios'
import Comment from '../components/Comment'
export default {
  name: 'AnimeDetails',
  components:{
    Comment
  },
  data: ()=>({
  animeDetails: {}
  }),
  mounted(){
  this.getAnimeDetails()
  },
  methods:{
    async getAnimeDetails() {
      const animeId = parseInt(this.$route.params.anime_id)
      console.log(animeId)
      try{
        const res = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`)
        this.animeDetails = res.data.data
        console.log(this.animeDetails)
      }catch(error){
        console.log(error.response)
      }
    },
    async saveAnimeDetails(){
      const res = await axios.post(`http://localhost:3001/api/anime/watchlist`)
     console.log(res)
    }


  }
}
</script>