<template>
  <div>
    <h1>My Spotify Top Music Genre</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Your top music genre is: {{ topGenre }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);
const topGenre = ref("");

onMounted(async () => {
  const token = await this.$spotify.getClientCredentialsToken();
  console.log(token);
});
</script>
