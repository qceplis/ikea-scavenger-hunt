<template>
  <v-container>
    <v-row>
      <h1 class="px-3">IKEAn't Stop!!!</h1>
    </v-row>
    <v-row>
      <v-col cols="4">
        <NuxtLink to="/"><v-btn>Join Team</v-btn></NuxtLink>
      </v-col>
      <v-col cols="4">
        <NuxtLink to="/challenges"><v-btn>Challenges</v-btn></NuxtLink>
      </v-col>
      <v-col cols="4">
        <NuxtLink to="/gallery"><v-btn>Gallery</v-btn></NuxtLink>
      </v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <slot />
</template>

<style scoped>
h1 {
  font-size: 48px;
}
.v-btn {
  background-color: #ffcc00;
}
</style>