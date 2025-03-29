<template>
  <v-container>
    <GalleryCategory
      v-for="category in challengeData"
        :category="category"
        :key="category.id"
    />
  </v-container>
</template>

<script>
import { GalleryCategory } from '#components';
import { challengeData } from '@/utils/challengeData'

// submissions table - challenge name, path, url

</script>

<style scoped>
  
</style>