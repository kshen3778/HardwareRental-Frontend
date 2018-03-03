<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">[Dashboard]</router-link>
    <router-link to="/signOut">[Signout]</router-link>
    <router-link to="/return">[Return]</router-link>
    <router-link to="/items">[Manage Items]</router-link>
    <router-link to="/manageUsers">[Manage Users]</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
