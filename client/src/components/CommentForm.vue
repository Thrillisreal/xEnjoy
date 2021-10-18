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
    await axios.post(`http://localhost:3001/api/comment/newcomment`, {description : this.form.description })
    this.form = {description:''}
  },
    async getAllComments(){
    this.$emit('getComments')
  }
  }
}
</script>

<style scoped>
  .getbtn{
    margin-top: 20px;
    color: white;
    padding: 5px 10px;
    background-color: #66FCF1;
    border-radius: 5px;
  }
  .comments{
   background-color: #1F2833;
  }
</style>