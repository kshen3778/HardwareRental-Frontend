<template>
  <div>


    Item Id:
    <input type="text" name="itemid" v-model="itemid">
    <br>

    Item Name:
    <input type="text" name="name" v-model="name">
    <br>

    Value in CAD:
    <input type="number" name="value" v-model="value">
    <br>

    <button type="button" v-on:click="add()">Add Item</button>

    <br>

    Remove Item Id:
    <input type="text" name="removeid" v-model="removeid">
    <br>

    <button type="button" v-on:click="remove()">Remove Item</button>

    {{response}}
  </div>

</template>

<script>
import axios from 'axios'
export default {

  name: 'ManageItems',
  data () {
    return {
      itemid: "",
      name: "",
      value: 0,
      removeid: "",
      response: ""
    }
  },

  created() {

  },

  methods: {

    add() {
      axios.post('https://hardwarerental-kshen3778.c9users.io/addItem', {
        itemid: this.itemid,
        name: this.name,
        value: this.value
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
      axios.post('https://hardwarerental-kshen3778.c9users.io/removeItem', {
        itemid: this.removeid
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
