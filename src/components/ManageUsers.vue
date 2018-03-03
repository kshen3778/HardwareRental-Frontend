<template>
  <div>

    User Id:
    <input type="text" name="userid" v-model="userid">
    <br>

    Email:
    <input type="text" name="email" v-model="email">
    <br>


    <button type="button" v-on:click="add()">Add User</button>

    <br>

    Remove User ID:
    <input type="text" name="removeid" v-model="removeid">
    <br>

    <button type="button" v-on:click="remove()">Remove User</button>

    {{response}}
  </div>

</template>

<script>
import axios from 'axios'
export default {

  name: 'ManageUsers',
  data () {
    return {
      userid: "",
      email: "",
      removeid: "",
      response: ""
    }
  },

  created() {

  },

  methods: {

    add() {
      axios.post('https://hardwarerental-kshen3778.c9users.io/createUser', {
        id: this.userid,
        email: this.email
      })
      .then((resp) => {
        console.log(resp)
        this.response = resp.data;
      })
      .catch((err) => {
        console.log(err)
      })
    },

    remove() {
      axios.post('https://hardwarerental-kshen3778.c9users.io/removeUser', {
        id: this.removeid
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
