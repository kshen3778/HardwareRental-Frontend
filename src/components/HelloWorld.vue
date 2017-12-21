<template>
  <div class="hello">
    <div v-for="(value, key) in products">
        {{ key }}: {{ value }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'HelloWorld',
  data () {
    return {
      products: {}
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
      }
  }
}

</script>
