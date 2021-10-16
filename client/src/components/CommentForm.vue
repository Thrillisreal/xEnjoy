<template>
  <div>
    <div>
      <form v-on:submit="handleSubmit">
        <input @input='handleChange'/>
        <button>Send</button>
        <button>X</button>
      </form>
      <div >
      <button @click="getAllComments">get comments</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CommentForm',
  data: ()=>({
  typecomment: '',
  form: {
    description: ''
  },
  allcomments: []
  }),
  mounted(){
  this.handleSubmit()
  this.getComments()
  },
  methods:{
  handleChange(){
    this.form.description = event.target.value
  },
  async handleSubmit(e){
    e.preventDefault()
    // const comment = 
   await axios.post(`http://localhost:3001/api/comment/newcomment`, {description : this.form.description })
   this.form = {description:''}
  },
   async getAllComments(){
    this.$emit('getComments')
  }
  // async deleteComment(){
  //   const res = await axios.delete(`http://localhost:3001/api/comment/deletecomment/${}`)
  // }


  }
}
</script>