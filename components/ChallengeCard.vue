<template>
    <v-card 
      :title="props.challenge.title"
      :subtitle="formattedPoints"
      class="my-3"
    >
      <!-- <v-icon v-if="isUploaded" icon="check_box" end />
      <v-icon v-else="isUploaded" icon="check_box_outline_blank" end /> -->
      <v-card-actions>
        <v-file-input 
          v-model="file"
          label="Choose a photo"
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
import { useTeamStore } from '@/stores/team'

const props = defineProps({
  challenge: Object,
  categoryId: Number
});

const teamStore = useTeamStore()

const file = ref(null);
const uploading = ref(false);
const photoUrl = ref('');
const emit = defineEmits(['uploaded']);

const formattedPoints = computed(() => {
  const plural = (props.challenge.points != 1) ? 's' : '';
  return `${props.challenge.points} point${plural}`
})

const bucketName = 'photo-submissions'

// TODO: handle multiple file uploads
const uploadPhoto = async () => {
  if (!file.value) return;
  
  uploading.value = true;

  try {
    const fileExt = file.value.name.split('.').pop();
    const teamID = (! teamStore.id) ? 'defaultTeam' : teamStore.id
    const filePath = `${teamID}/${props.challenge.id}.${fileExt}`;
    
    // Upload to Supabase Storage
    const { _, storageError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file.value, {
        upsert: true,
      });

    if (storageError) throw storageError;

    // Get public URL
    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
    const myURL = data.publicUrl;
    photoUrl.value = myURL

    const { submissionData, error } = await supabase
      .from('submissions')
      .insert({
        category_id: props.categoryId,
        challenge_id: props.challenge.id,
        team_id: teamID,
        photo_path: myURL
      })

    if (error) throw error

    // emit('uploaded', publicUrl); // Emit uploaded event with URL
  } catch (error) {
    console.error('Upload failed:', error.message);
  } finally {
    uploading.value = false;
  }

  
};

const isUploaded = computed(async () => {
  const teamID = (! teamStore.id) ? 'defaultTeam' : teamStore.id
  const filePath = `${teamID}/${props.challenge.id}.*`;
  const { publicUrl } = supabase.storage.from(bucketName).getPublicUrl(filePath);

  return (! publicUrl) ? false : true
})

</script>

<style scoped>
  .v-card {
    max-width: 95vw;
    background-color: #ffcc00;
}
</style>