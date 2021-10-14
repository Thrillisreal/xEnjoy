<template>
  <div>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="onSubmit">
      <div>
        <h2>Email:</h2>
          <input type="email" :value="email" @input="handleChange" />
      </div>
      <div>
        <h2>Password:</h2>
          <input type="password" :value="password" @input="handlePass" />
      </div>
      <button type="submit" :disabled="email === '' || password === ''">SignUp</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../../globals'
export default {
  name: 'SignUp',
  components:{
    
  },
  data: () => ({
    email: '',
    password: ''
    }),
  methods:{
  handleChange(event){
    this.email = event.target.value
    },
    handlePass(event){
    this.password = event.target.value
    },
    async onSubmit(){
      // console.log('hi')
      // this.$router.push('/home')
      try {
      const res = await axios.post(`${BASE_URL}api/user/register`, {"email": this.email, "password": this.password})
      if (res.data){
        localStorage.setItem('token', res.data)
        this.email = ''
        this.password = ''
        this.$router.push(`/signin`)
      } else {
        alert("unauthorized")
      }
      } catch (err) {
        alert("an error occurred when attempting to sign in")
      }
    }
  }
}
</script>