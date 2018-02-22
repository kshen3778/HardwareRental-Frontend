<template>
  <div class="hello">
    <div v-for="(value, key) in users">
        <div v-if="value">
          ID: {{key}}
          <br>
          Name: {{value.username}}
          <br>
          Email: {{value.depositValue}}
          <br>
          Charge: <input type="number" name="amount" v-model="value.chargeAmount"><br>
          <button type="button" v-on:click="charge(key, value.chargeAmount)">Charge</button>

          <br>

        </div>
        <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'Users',
  data () {
    return {
      users: {}
    }
  },

  created() {
      this.fetchData()
  },

  methods: {
      fetchData() {
        axios.get('https://hardwarerental-kshen3778.c9users.io/users')
        .then((resp) => {
          this.users = resp.data;
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },

      charge(id, chargeAmount) {
        axios.post('https://hardwarerental-kshen3778.c9users.io/charge', {
          userid: id,
          amount: chargeAmount
        })
        .then((resp) => {
          console.log(resp);
          this.fetchData();
        })
        .catch((err) => {
          console.log(err)
        })
      }
  }
}

</script>
