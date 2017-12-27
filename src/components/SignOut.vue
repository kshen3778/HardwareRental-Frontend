<template>
  <div>
    User Id:
    <input type="text" name="username" v-model="username">
    <br>

    Item Id:
    <input type="text" name="itemid" v-model="itemid">
    <br>
    <button type="button" v-on:click="signOut()">SignOut</button>

    {{response}}
  </div>

</template>

<script>
import axios from 'axios'
export default {

  name: 'SignOut',
  data () {
    return {
      username: "",
      itemid: "",
      response: ""
    }
  },

  created() {

  },

  methods: {

    signOut() {
      axios.post('https://hardwarerental-kshen3778.c9users.io/signOut', {
        itemid: this.itemid,
        user: this.username
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
