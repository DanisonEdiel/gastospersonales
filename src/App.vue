<template>
  <Gastospersonales msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Gastospersonales from './components/Gastospersonal.vue'

export default {
  name: 'App',
  components: {
    Gastospersonales,
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
