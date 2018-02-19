<template>
  <div v-if="user">
    Username: {{user.displayName}}
    <br>
    Email: {{user.email}}
    <br>

    <button type="button" v-on:click="resetPassword()">Reset Password</button>

    {{resetResponse}}

    <br>

    Update Card:
    <br>
    <card class='stripe-card'
      stripe='pk_test_p6Wk8cKlavPdUlqqsF9s4u1m'
      :options='stripeOptions'
    />

    <button class='pay-with-stripe' @click='updateCard'>Update Card</button>
  </div>

  <div v-else-if="!user">
      Log in first.
  </div>

</template>

<script>
import axios from 'axios'
import { Card, createToken } from 'vue-stripe-elements'
export default {

  name: 'Profile',
  data () {
    return {
      resetResponse: "",
      user: null,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },

  created() {
    axios.get('https://hardwarerental-kshen3778.c9users.io/getCurrentUser')
    .then((resp) => {
      this.user = resp.data
      console.log(resp);
    })
    .catch((err) => {
      console.log(err)
    })
  },

  components: { Card },

  methods: {
    updateCard () {
      //check out https://forum.vuejs.org/t/how-can-i-get-the-data-returned-by-callback-function/18433

      var self = this;

      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(function(data){
        console.log(data.token);
        axios.post('https://hardwarerental-kshen3778.c9users.io/updateCard', {
          stripeToken: data.token.id
        })
        .then((resp) => {
          console.log(resp);
          self.response = resp.data;
        })
        .catch((err) => {
          console.log(err);
        })
      });
    },

    resetPassword(){
      axios.post('https://hardwarerental-kshen3778.c9users.io/resetPassword', {
        email: this.user.email
      })
      .then((resp) => {
        console.log(resp);
        this.resetResponse = resp.data;
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}

</script>
