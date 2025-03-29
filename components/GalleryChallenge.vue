<template>
  <h2 class="py-3">{{ props.challenge.title }}</h2>
  <v-row v-show="isCarouselVisible">
    <v-carousel
      hide-delimiters
      height="400"
      progress="primary"
    >
      <GallerySubmission 
        v-for="submission in submissions"
          :submission="submission"
          :key="submission.id"
      />
    </v-carousel>
  </v-row>
</template>

<script setup>

import { GallerySubmission } from '#components';

import { useSupabase } from '@/lib/supabase'
const supabase = useSupabase()

const props = defineProps({
  challenge: Object,
  categoryId: Number
});

const submissions = ref([])
const isCarouselVisible = ref(false)

async function getSubmissions() {
  const { data } = await supabase
    .from('submissions')
    .select()
    .eq('challenge_id', props.challenge.id)

  submissions.value = data

  if (submissions.value.length) {
    isCarouselVisible.value = true
  }
}

onMounted(() => {
  getSubmissions()
})

</script>

<style scoped>
</style>