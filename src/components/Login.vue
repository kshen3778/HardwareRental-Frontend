<template>
  <div>

    Email:
    <br>
    <input type="email" name="email" v-model="email">
    <br>

    Password:
    <br>
    <input type="text" id="password" name="password" v-model="password">
    <br>


    <button type="button" v-on:click="login()">Login</button>

    <br>

    <button type="button" v-on:click="resetPassword()">Forgot Password</button>

    {{response}}
  </div>

</template>

<script>
import axios from 'axios'
export default {

  name: 'Login',
  data () {
    return {
      email: "",
      password: "",
      response: ""
    }
  },

  created() {

  },

  methods: {

    login() {
      axios.post('https://hardwarerental-kshen3778.c9users.io/login', {
        email: this.email,
        password: this.password
      })
      .then((resp) => {
        console.log(resp);
        this.response = resp.data;
        this.$router.push("Profile");
      })
      .catch((err) => {
        console.log(err)
      })
    },

    resetPassword(){

      if(this.email.replace(/\s/g,"") != ""){
        axios.post('https://hardwarerental-kshen3778.c9users.io/resetPassword', {
          email: this.email
        })
        .then((resp) => {
          console.log(resp);
          this.response = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        this.response = "Please provide the email.";
      }
    }

  }
}

</script>
