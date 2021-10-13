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
      this.username = event.target.value
    },
    handlePass(event){
      this.password = event.target.value
    },
    async onSubmit(){
      
    }
  }
}