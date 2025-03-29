<template>
  <v-col class="py-1" cols="4">
    <NuxtLink :to="to"><v-btn><slot /></v-btn></NuxtLink>
  </v-col>
</template>

<script setup>
const props = defineProps({
  to: String
});
</script>

<style scoped>

.v-btn {
  background-color: #ffcc00;
  font-size: small;
}
</style>