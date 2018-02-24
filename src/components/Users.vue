<template>
  <div class="hello">
    <b-list-group>
      <div v-for="(value, key) in users">
          <b-list-group-item @click="showCollapse[key] = !showCollapse[key]"
             :class="showCollapse[key] ? 'collapsed' : null"
             aria-controls="collapse4"
             :aria-expanded="showCollapse[key] ? 'true' : 'false'">{{key}}</b-list-group-item>

          <b-collapse v-model="showCollapse[key]" id="collapse4" class="mt-2">
            <div v-if="value">
              ID: {{key}}
              <br>
              Name: {{value.username}}
              <br>
              Email: {{value.depositValue}}
              <br>
              Hardware Currently Signed out (ID):
              <br>
              <div v-for="(data, key) in value.signOuts">
                {{key}}
                <br>
              </div>
              <br>
              Charge: <input type="number" name="amount" v-model="value.chargeAmount"><br>
              <button type="button" v-on:click="charge(key, value.chargeAmount)">Charge</button>
              <br>
            </div>
          </b-collapse>

          <br>
      </div>
    </b-list-group>

  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'Users',
  data () {
    return {
      users: {},
      showCollapse: []
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
