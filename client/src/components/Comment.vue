<template>
<div>
<p v-if="!edit">{{description}}</p>
<textarea v-else :value="description" @input="handleChange"></textarea>
<div>
  <button v-if="!edit" @click="toggleEdit">Edit</button>
  <button v-else @click="handleSubmit">Saved Changes</button>
  <button @click="deleteComment">X</button>
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
    // const comment = 
   await axios.put(`http://localhost:3001/api/comment/updatecomment/${this.commentId}`, {description : this.description })
  },
  async deleteComment(){
   await axios.delete(`http://localhost:3001/api/comment/deletecomment/${this.commentId}`)
  }

  }
}
</script>