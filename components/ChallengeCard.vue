<template>
    <v-card 
      :title="props.challenge.title"
      :subtitle="formattedPoints"
      class="my-3"
    >
      <v-card-actions>
        <v-file-input 
          v-model="file"
          label="Upload a photo"
          accept="image/*"
          prepend-icon="mdi-camera"
          :disabled="uploading"
        />
        <v-btn 
          :loading="uploading" 
          color="primary" 
          @click="uploadPhoto"
        >
          Upload
        </v-btn>
      </v-card-actions>
      <v-img 
        v-if="photoUrl" 
        :src="photoUrl" 
        class="mt-4" 
        height="200px" 
        contain 
      />
    </v-card>
</template>

<script setup>
import { supabase } from '@/lib/supabase'

const props = defineProps({
  challenge: Object
});

// TODO: change card colour when photo uploaded

const file = ref(null);
const uploading = ref(false);
const photoUrl = ref('');
const emit = defineEmits(['uploaded']);

const formattedPoints = computed(() => {
  const plural = (props.challenge.points != 1) ? 's' : '';
  return `${props.challenge.points} point${plural}`
})

const bucketName = 'photo-submissions'
const uploadPhoto = async () => {
  if (!file.value) return;
  
  uploading.value = true;

  try {
    const fileExt = file.value.name.split('.').pop();
    // todo create fileID based on team, category, challenge
    const filePath = `challenges/${Date.now()}.${fileExt}`;
    
    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file.value);

    if (error) throw error;

    // Get public URL
    const { publicUrl } = supabase.storage.from(bucketName).getPublicUrl(filePath);
    photoUrl.value = publicUrl;

    emit('uploaded', publicUrl); // Emit uploaded event with URL
  } catch (error) {
    console.error('Upload failed:', error.message);
  } finally {
    uploading.value = false;
  }
};

</script>

<style scoped>
  .v-card {
  max-width: 95vw;
}
</style>