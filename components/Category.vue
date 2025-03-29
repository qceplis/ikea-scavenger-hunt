<template>
  <v-container>
    <v-row class="py-2">
      <v-btn 
        @click="handleTransition"
        class="mx-3"
      >{{ buttonText }}</v-btn>
      <h1>{{ props.category.name }}</h1>
    </v-row>
    <ChallengeCard
      v-show="isVisible"
      transition="fade-transition"
      v-for="challenge in props.category.challenges"
        :challenge="challenge"
        :categoryId="props.category.id"
        :key="challenge.id"
    />
  </v-container>
</template>

<script setup>
import { ChallengeCard } from '#components';

const props = defineProps({
  category: Object,
});

const isVisible = ref(false)
const buttonText = ref('Show')

const handleTransition = () => {
  isVisible.value = !isVisible.value
  buttonText.value = (isVisible.value) ? 'Hide' : 'Show';
}

</script>

<style scoped>
.v-btn {
  background-color: #ffcc00;
}
</style>