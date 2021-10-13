<template>
  <div >
    <div>
      <h1>Sign In</h1>
      <form @submit.prevent="onSubmit" >
        <div>
          <h2>Email:</h2>
          <input type="email" :value="email" @input="handleChange"  />
        </div>
        <div>
          <h2>Password:</h2>
          <input type="password" :value="password" @input="handlePass" />
        </div>
        <div class="linkdiv">
          <a href="/">New Account?</a>
        </div>
        <button type="submit" :disabled="email ==='' || password === ''">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  components: {},
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    handleChange(event){
      this.email = event.target.value
    },
    handlePass(event){
      this.password = event.target.value
    },
    async onSubmit(){
      
    }
  }
}
</script>