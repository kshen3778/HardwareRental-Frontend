<template>
  <div>
    Item Id:
    <input type="text" name="itemid" v-model="itemid">
    <br>
    <button type="button" v-on:click="returnItem()">Return</button>

    {{response}}
  </div>

</template>

<script>
import axios from 'axios'
export default {

  name: 'Return',
  data () {
    return {
      itemid: "",
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
