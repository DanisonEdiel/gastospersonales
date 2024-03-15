<template>
    <div>
      <!-- Tu contenido aquí -->
      <h1>Esta es la página PDF</h1>

    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.$root.$on('generar-pdf', (data) => {
        // Generar el PDF con los datos recibidos
        this.generarPDF(data);
      });
    },
    methods: {
      generarPDF(data) {
        // Generar el PDF y descargarlo
        return data == 'ok';
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  