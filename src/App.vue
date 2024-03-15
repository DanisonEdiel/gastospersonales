<template>
  <Gastospersonales msg="Tablas"/>
  <AppPdf msg="Pdf"/>
</template>

<script>
import Gastospersonales from './components/Gastospersonal.vue'
import AppPdf from './components/AppPdf.vue'

export default {
  name: 'App',
  components: {
    Gastospersonales,
    AppPdf
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
