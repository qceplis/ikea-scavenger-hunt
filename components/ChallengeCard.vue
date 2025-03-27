<template>
    <v-card 
      :title="props.challenge.title"
      :subtitle="props.challenge.points"
      class="my-3"
    >
      <v-card-actions>
        <v-btn>Upload</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script setup>
const props = defineProps({
  challenge: Object
});
</script>

<style lang="">
  
</style>