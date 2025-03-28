<template>
  <v-container>
    <h1>{{ props.category.name }}</h1>
      <ChallengeCard
        v-for="challenge in props.category.challenges"
          :challenge="challenge"
          :key="challenge.id"
      />
  </v-container>
</template>

<script setup>
import { ChallengeCard } from '#components';

const props = defineProps({
  category: Object,
});

</script>

<style scoped>
  h1 {
    color: #FBDA0C;
  }
</style>