<template>
  <v-container>
    <h1>Choose a team:</h1>
    <TeamCard 
      v-for="team in teamData"
      :teamInfo="team"
      :key="team.name"
    />
  </v-container>
</template>

<script setup>
import { TeamCard } from '#components'
import { teamData } from '@/utils/teamData'
</script>

<style scoped>
  
</style>