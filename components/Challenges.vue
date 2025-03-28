<template lang="">
  <div>
    <ul>
      <Category
        v-for="category in challengeData"
          :category="category"
          :key="category.id"
      />
    </ul>
  </div>
</template>

<script>
import { challengeData } from '@/utils/challengeData'

</script>

<style lang="">
  
</style>