<template>
  <v-container>
    <h1>{{ props.name }}</h1>
      <ChallengeCard
        v-for="challenge in props.challenges"
          :challenge="challenge"
          :key="challenge.id"
      />
  </v-container>
</template>

<script setup>
import { ChallengeCard } from '#components';

const props = defineProps({
  name: String,
  challenges: Object
});

</script>

<style>
  
</style>