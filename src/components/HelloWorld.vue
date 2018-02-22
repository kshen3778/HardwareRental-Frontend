<template>
  <div class="hello">
    <div v-for="(value, key) in products">
        <div v-if="value">
          ID: {{key}}  |  Name: {{value.name}}  |  Deposit: {{value.depositValue}}
          <div v-if="value.owner">
            Owner: {{value.owner.id}}
            <br>
            Returned: {{value.owner.returned}}
            <div v-if="value.owner.returned == true">
              <button type="button" v-on:click="confirmReturn(key)">Confirm Return</button>
            </div>
          </div>
        </div>
        <br>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'HelloWorld',
  data () {
    return {
      products: {},
      chargeAmount: 0
    }
  },

  created() {
      this.fetchData()
  },

  methods: {
      fetchData() {
        axios.get('https://hardwarerental-kshen3778.c9users.io/dashboard')
        .then((resp) => {
          this.products = resp.data;
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },

      confirmReturn(id) {
        axios.post('https://hardwarerental-kshen3778.c9users.io/confirmReturn', {
          itemid: id
        })
        .then((resp) => {
          console.log(resp)
          this.fetchData();
        })
        .catch((err) => {
          console.log(err)
        })
      }
  }
}

</script>
