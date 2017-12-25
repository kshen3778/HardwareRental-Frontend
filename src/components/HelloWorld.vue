<template>
  <div class="hello">
    <div v-for="(value, key) in products">
        ID: {{key}}  |  Name: {{value.name}}  |  Deposit: {{value.depositValue}}
        <div v-if="value.owner">
          Owner: {{value.owner.id}}
          <br>
          Returned: {{value.owner.returned}}
          <div v-if="value.owner.returned == true">
            Return Amount: <input type="number" name="amount" v-model="returnAmount"><br>
            <button type="button" v-on:click="refund(key)">Confirm Return</button>
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
      returnAmount: 0,
    }
  },

  created() {
      this.fetchData()
  },

  methods: {
      fetchData() {
        axios.get('https://hardwarerental-kshen3778.c9users.io/dashboard')
        .then((resp) => {
          this.products = resp.data
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      },

      refund(id) {
        axios.post('https://hardwarerental-kshen3778.c9users.io/refund', {
          itemidfield: id,
          amount: this.returnAmount
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
