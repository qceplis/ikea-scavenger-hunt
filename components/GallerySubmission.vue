<template lang="">
  <v-carousel-item 
  src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  >
  </v-carousel-item>
</template>
<script setup>
const props = defineProps({
  submission: Object
});

const photoPath = computed(() => props.submssion.photo_path)

</script>
<style >
  
</style>