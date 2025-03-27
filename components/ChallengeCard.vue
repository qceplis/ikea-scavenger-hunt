<template>
    <v-card 
      :title="props.challenge.title"
      :subtitle="formattedPoints"
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

const formattedPoints = computed(() => {
  const plural = (props.challenge.points != 1) ? 's' : '';
  return `${props.challenge.points} point${plural}`
})
</script>

<style lang="">
  
</style>