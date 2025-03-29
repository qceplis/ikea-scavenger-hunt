<template>
  <v-col >
    <v-card
      :title="teamName"
      :subtitle="props.teamInfo.members"
    >
      <v-card-actions>
        <v-btn @click="joinTeam">Join</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
import { useTeamStore } from '@/stores/team'

const props = defineProps({
  teamInfo: Object 
});

const teamStore = useTeamStore()

const teamName  = computed(() => `Team ${props.teamInfo.id}`)
const teamColor = computed(() => props.teamInfo.color)

const joinTeam = () => {
  teamStore.id = props.teamInfo.id
  navigateTo('/challenges')
}
</script>

<style scoped>
  .v-card {
    background-color: v-bind(teamColor);
  }
</style>