<script setup>
import useClients from "@/composables/useClients";

const { data, hasError, isLoading } = useClients();
</script>

<template>
  <div class="container">
    <p v-if="isLoading">cargando ...</p>
    <p v-else-if="hasError"></p>
    <table class="table table-striped" v-else>
      <thead>
        <tr>
          <th class="text-center">Nombre</th>
          <th class="text-center">Documento</th>
          <th class="text-center">Telefono</th>
          <th class="text-center">Correo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.identity }}</td>
          <td class="text-center">{{ item.phone }}</td>
          <td class="text-center">{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
