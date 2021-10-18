<template>
<div class="comment-contain">
  <div>
    <div>
      <img :src="animeDetails.attributes.coverImage.small"/>
    </div>
    <div>
    <h3>{{animeDetails.attributes.canonicalTitle}}</h3>
    </div>
    <div class="anime-des">
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
  <CommentForm @getComments="getComments"  />
  <div class="forcommment" v-for=" comment in allComments" :key="comment.id">
    <Comment :description="comment.description" :commentId="comment.id"/>
  </div>
</div>
</template>


<script>
import axios from 'axios'
import CommentForm from '../components/CommentForm'
import Comment from '../components/Comment'
export default {
  name: 'AnimeDetails',
  components:{
    CommentForm,
    Comment
  },
  data: ()=>({
  animeDetails: {},
  allComments: []
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
    },
    async getComments(){
     const res = await axios.get(`http://localhost:3001/api/comment/allcomments`)
     console.log(res)
    this.allComments = res.data
  }


  }
}
</script>

<style scoped>
.comment-contain{
  border: 1px solid black;
  width: 100%;
}
.anime-des{
  text-align: center;
}
</style>