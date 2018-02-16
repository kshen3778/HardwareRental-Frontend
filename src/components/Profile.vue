<template>
  <div v-if="user">
    Username: {{user.displayName}}
    <br>
    Email: {{user.email}}
    <br>
    Update Card:
  </div>

  <div v-else-if="!user">
      Log in first.
  </div>

</template>

<script>
import axios from 'axios'
export default {

  name: 'Profile',
  data () {
    return {
      user: null
    }
  },

  created() {
    axios.get('https://hardwarerental-kshen3778.c9users.io/getCurrentUser')
    .then((resp) => {
      this.user = resp.data
      console.log(resp);
    })
    .catch((err) => {
      console.log(err)
    })
  },

  methods: {

  }
}

</script>
