<template lang="">
  <v-container>
    <GalleryChallenge 
      v-for="challenge in props.category.challenges"
        :challenge="challenge"
        :categoryId="category.id"
    />
  </v-container>
</template>

<script setup>
import { GalleryChallenge } from '#components';

const props = defineProps({
  category: Object
});

</script>
<style lang="">
  
</style>