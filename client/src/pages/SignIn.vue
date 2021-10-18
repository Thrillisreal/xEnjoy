<template>
  <div class="signin-contain">
    <div class="signin">
      <div class="signin-title">
      <h1>Sign In</h1>
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
        <div>
          <a href="/">New Account?</a>
        </div>
        <button type="submit" :disabled="email === '' || password === ''">
          Sign In
        </button>
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
    password: ''
  }),
  methods: {
    handleChange(event) {
      this.email = event.target.value
    },
    handlePass(event) {
      this.password = event.target.value
    },
    async onSubmit() {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
.signin {
  text-align: center;
  line-height: 50px;
}

.signin button{
  padding: 5px 10px;
  color: #66FCF1;
  background-color: #1F2833;
  border-radius: 5px;
}
.signin-contain{
  background-color: #0C0C10;
  height: 100vh;
}
.signin-contain h2{
  color: white;
}

.signin-title{
  padding-top: 150px;
  color: #66FCF1;
  text-decoration: underline;
}
.signin a{
  padding: 5px 10px;
  color: #66FCF1;
  background-color: #1F2833;
  border-radius: 5px;
}
.signin input{
  padding: 5px 25px;
  border-radius: 5px;
}
</style>