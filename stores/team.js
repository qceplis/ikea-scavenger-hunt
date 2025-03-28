import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', () => {
  const id = ref(null);

  return { id }
})