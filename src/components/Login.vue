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

    returnItem() {
      axios.post('https://hardwarerental-kshen3778.c9users.io/returnItem', {
        itemid: this.itemid
      })
      .then((resp) => {
        console.log(resp)
        this.response = resp.data;
      })
      .catch((err) => {
        console.log(err)
      })
    }

  }
}

</script>
