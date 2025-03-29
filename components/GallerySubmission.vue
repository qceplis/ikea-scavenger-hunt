<template>
  <v-carousel-item 
    :src="props.submission.photo_path"
    cover
  >
  </v-carousel-item>
</template>
<script setup>
const props = defineProps({
  submission: Object
});

</script>
<style >
  
</style>