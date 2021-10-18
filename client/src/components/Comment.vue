<template>
<div class="comment-comment">
<p v-if="!edit">{{description}}</p>
<textarea v-else :value="description" @input="handleChange"></textarea>
<div>
  <button class="editbtn" v-if="!edit" @click="toggleEdit">Edit</button>
  <button v-else @click="handleSubmit">Saved Changes</button>
  <button class="deletebtn" @click="deleteComment">X</button>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Comment',
  props:{
    description: String,
    commentId: Number
  },
  data: ()=>({
    edit: false
  }),
  methods:{
    toggleEdit(){
      this.edit = true
    },
    handleChange(e){
      this.description = e.target.value
    },
    async handleSubmit(e){
    e.preventDefault()
   await axios.put(`http://localhost:3001/api/comment/updatecomment/${this.commentId}`, {description : this.description })
  },
  async deleteComment(){
   await axios.delete(`http://localhost:3001/api/comment/deletecomment/${this.commentId}`)
  }

  }
}
</script>

<style scoped>
.comment-comment{
  background-color: #1F2833;
}
.deletebtn{
  color: #66FCF1;
  padding: 5px 5px;
  margin-left: 4px;
}
.editbtn{
  padding: 5px 5px;
}
</style>