<template>
  <v-col >
    <v-card
      :title="teamName"
    >
      <v-card-actions>
        <v-btn>Join</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps({
  teamInfo: Object
});

const teamName = computed(() => `Team ${props.teamInfo.id}`)
</script>

<style scoped>
  .v-card {
    background-color: #FBDA0C;
  }
</style>