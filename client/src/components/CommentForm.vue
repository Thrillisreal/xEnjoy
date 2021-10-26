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
import {Client} from '../../globals'
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
  this.getAllComments()
  },
  methods:{
  handleChange(){
    this.form.description = event.target.value
  },
  async handleSubmit(e){
    e.preventDefault()
    await Client.post({description : this.form.description })
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