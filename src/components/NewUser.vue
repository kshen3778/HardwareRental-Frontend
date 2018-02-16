<template>

  <div>
    User Id:
    <br>
    <input type="text" name="username" v-model="username">
    <br>

    Email:
    <br>
    <input type="email" name="email" v-model="email">
    <br>

    Password:
    <br>
    <input type="text" id="password" name="password" v-model="password">
    <br>

    <h1>Add a credit card:</h1>
    <card class='stripe-card'
      :class='{ complete }'
      stripe='pk_test_p6Wk8cKlavPdUlqqsF9s4u1m'
      :options='stripeOptions'
      @change='complete = $event.complete'
    />

    <button class='pay-with-stripe' @click='register' :disabled='!complete'>Register User</button>

    {{response}}
  </div>



</template>

<script>
import axios from 'axios'
//import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, createToken } from 'vue-stripe-elements'

export default {

  name: 'NewUser',
  data () {
    return {
      username: "",
      email: "",
      password: "",
      response: "",
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },

  created() {

  },

  components: { Card },

  methods: {
    register () {
      //check out https://forum.vuejs.org/t/how-can-i-get-the-data-returned-by-callback-function/18433

      var self = this;

      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(function(data){
        console.log(data.token);
        axios.post('https://hardwarerental-kshen3778.c9users.io/addUser', {
          username: self.username,
          email: self.email,
          password: self.password,
          stripeToken: data.token.id
        })
        .then((resp) => {
          console.log(resp);
          self.response = resp.data;
          //redirect to the profile page
        })
        .catch((err) => {
          console.log(err);
        })
      });
    }
  }

}

</script>

<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>
