<template>
  <div>
    <ul>
      <Category
        v-for="category in categories"
          :name="category.name"
          :challenges="category.challenges"
          :key="category.id"
      />
    </ul>
  </div>
</template>

<script setup>
  // import { supabase } from '@/lib/supabase'
  import { createClient } from "@supabase/supabase-js";
  const supabase = createClient('https://fbwygtderqyjezkbshao.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZid3lndGRlcnF5amV6a2JzaGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNDc4MzgsImV4cCI6MjA1NzkyMzgzOH0.ePBrIRLD1NJG13zlThloMoHbRp3pGQBaGD93_Kpcxyo')
  const categories = ref([])

  async function getCategories() {
    // const data = [
    //   {
    //     id: 1,
    //     name: "Uniquely IKEA",
    //     challenges: [
    //       {
    //         id: 1,
    //         title: "Get cozy with Blahaj",
    //         points: 1,
    //       },
    //     ]
    //   },
    //   {
    //     id: 2,
    //     name: "Items",
    //     challenges: [
    //       {
    //         id: 1,
    //         title: "Find a Rainbow",
    //         points: 1,
    //       },
    //       {
    //         id: 2,
    //         title: "Create a Swedish Flag",
    //         points: 1,
    //       },
    //     ]
    //   },
    // ]

    const { data } = await supabase.from('challenges').select()
    console.log(data)
    categories.value = data
  }

  onMounted(() => {
    getCategories()}
  )
</script>
