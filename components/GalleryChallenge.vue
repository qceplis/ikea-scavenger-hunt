<template>
  <h1 class="py-3">{{ props.challenge.title }}</h1>
  <v-row>
    <v-carousel 
      hide-delimiters
      height="400"
      progress="primary"
    >
      <GallerySubmission />
      <GallerySubmission />
    </v-carousel>
  </v-row>
</template>

<script setup>
import { GallerySubmission } from '#components';

import { supabase } from '@/lib/supabase'

const props = defineProps({
  challenge: Object,
  categoryId: Number
});

</script>

<style scoped>
</style>