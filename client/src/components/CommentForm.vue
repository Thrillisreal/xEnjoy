<template>
  <div>
    <div class="comments">
      <form v-on:submit="handleSubmit">
        <input @input='handleChange'/>
        <button>Send</button>
      </form>
      <div >
      <button class="getbtn" @click="getAllComments">Show Comments</button>
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

<style scoped>
  .getbtn{
    margin-top: 20px;
  }
  .comments{
   
  }
</style>