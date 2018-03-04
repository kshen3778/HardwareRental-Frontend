<template>
  <div v-on:keyup.enter="signOut()">
    User Id:
    <input type="text" name="username" v-model="username">
    <br>

    Item Id:
    <input type="text" name="itemid" v-model="itemid">
    <br>
    <button type="button" v-on:click="signOut()">SignOut</button>

    {{response}}

    <br>
    <button type="button" v-on:click="clear()">Clear</button>
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
    clear(){
      this.username = "";
      this.itemid = "";
      this.response = "";
    },

    signOut() {
      var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if(this.itemid && this.itemid != "" && !format.test(this.itemid)){
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
        });
      }else{
        this.response = "Invalid ID";
      }
    }

  }
}

</script>
