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
// import { supabase } from '@/lib/supabase'
import { challengeData } from '@/utils/challengeData'
// import { createClient } from "@supabase/supabase-js";
// const supabase = createClient('https://fbwygtderqyjezkbshao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZid3lndGRlcnF5amV6a2JzaGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNDc4MzgsImV4cCI6MjA1NzkyMzgzOH0.ePBrIRLD1NJG13zlThloMoHbRp3pGQBaGD93_Kpcxyo')
  

</script>

<style lang="">
  
</style>