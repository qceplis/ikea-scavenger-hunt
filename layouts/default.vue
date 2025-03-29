<template>
  <v-container>
    <v-row>
      <h1 class="px-3">IKEAn't Stop!!!</h1>
    </v-row>
    <v-row>
      <NavButton to="/">Join Team</NavButton>
      <NavButton to="/challenges">Challenges</NavButton>
      <NavButton to="/gallery">Gallery</NavButton>
    </v-row>
  </v-container>
  <slot />
</template>

<script>
import { NavButton } from '#components'
</script>

<style scoped>
h1 {
  font-size: 48px;
}
</style>