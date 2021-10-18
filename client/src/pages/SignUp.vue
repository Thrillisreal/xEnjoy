<template>
  <div class="signup-contain">
    <div class="signup">
      <div class="signup-title">
      <h1>Sign Up</h1>
      </div>
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
// import axios from 'axios'
// import {BASE_URL} from '../../globals'
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
        this.$router.push(`/signin`)
    }
  }
}
</script>
<style scoped>
  .signup-contain{
  background-color: #0C0C10;
  height: 100vh;
}
.signup button{
  padding: 5px 10px;
  color: #66FCF1;
  background-color: #1F2833;
  border-radius: 5px;
}
.signup {
  text-align: center;
  line-height: 50px;
}
.signup-title{
  padding-top: 150px;
  color: #66FCF1;
  text-decoration: underline;
}
.signup-contain h2{
  color: white;
}
.signup input{
  padding: 5px 25px;
  border-radius: 5px;
}
</style>