<script setup lang="ts">
import type { Song } from "@/types";
const { songs } = defineProps<{
  songs: Song[];
}>();
const emits = defineEmits<{ (event: "add-to-favorite", id: string): void }>();
const currentSong = songs[Math.floor(Math.random() * songs.length)];
</script>

<template>
  <v-card title="Player" class="player mx-auto pa-2 mb-4" max-width="300">
    <v-card-text>
      <v-icon icon="mdi-play"> </v-icon>
      {{ currentSong.artist }} {{ currentSong.title }} ({{ currentSong.year }})
    </v-card-text>
    <v-card-actions>
      <v-btn @click="emits('add-to-favorite', currentSong.id)"
        >Add to favorites</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
