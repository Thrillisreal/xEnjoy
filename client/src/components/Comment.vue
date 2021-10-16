<template>
  <div>
    <div>
      <form>
        <input @input='handleChange'/>
        <button @click="handleSubmit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Comment',
  data: ()=>({
  typecomment: '',
  form: {
    description: ''
  }
  }),
  methods:{
  handleChange(){
    this.typecomment = event.target.value
  },
  async handleSubmit(e){
    e.preventDefault()
    // const comment = 
   await axios.post(`http://localhost:3001/api/comment/newcomment`, {"description": this.form.description })
  }
  }
}
</script>