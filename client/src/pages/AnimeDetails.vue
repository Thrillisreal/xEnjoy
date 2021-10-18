<template>
<div class="comment-contain">
  <div>
    <div>
      <img :src="animeDetails.attributes.coverImage.small" width="100%" height="300px"/>
    </div>
    <div>
    <h3 class="anime-title">{{animeDetails.attributes.canonicalTitle}}</h3>
    </div>
    <div class="anime-des">
      <p class="headers">Description:</p>
      <p class="anime-details">{{animeDetails.attributes.description}}</p>
    </div>
    <div>
      <p class="headers">Age Rating:</p>
      <p class="anime-details">{{animeDetails.attributes.ageRatingGuide}}</p>
    </div>
    <div>
      <p class="headers">Rating:</p>
      <p class="anime-details">{{animeDetails.attributes.averageRating}}</p>
    </div>
  </div>
  <div class="comment-sec">
  <h3>Your thoughts...</h3>
  <CommentForm @getComments="getComments"  />
  <div class="forcommment" v-for=" comment in allComments" :key="comment.id">
    <Comment :description="comment.description" :commentId="comment.id"/>
  </div>
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
  border: 2px solid black;
}
.comment-contain img{
  border-radius: 10px;
}

.headers{
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: underline;
  margin-left: 10px;
  color: #66FCF1;
}
.comment-sec{
  text-align: center;
  margin: 30px auto;
  border: 2px solid #45A29E;
  width: 400px;
  height: 300px;
  padding-top: 70px;
  border-radius: 10px;
  background-color: #1F2833;
  color: white;
}
.comment-sec h3{
  color: #45A29E;
  background-color: #1F2833;
}
.anime-details{
  margin-bottom: 20px;
  margin-left: 15px;
  color: white;
  line-height: 30px;
}
.anime-title{
  font-size: 30px;
  margin-left: 10px;
  margin-bottom: 60px;
  text-align: center;
  color: #66FCF1;
}
*{
  background-color: #0C0C10;
}
</style>