<script setup lang="ts">
import type { Song } from "@/types";
const { songs } = defineProps<{ songs: Song[]; isLoading: boolean }>();
import { deleteSongs } from "@/firebase/songs";
</script>

<template>
  <v-card class="mx-auto pa-2" max-width="300">
    <v-list>
      <v-list-subheader>Favorite Songs</v-list-subheader>
      <div
        v-if="isLoading"
        class="d-flex justify-center align-center loading-height"
      >
        Loading ...
      </div>
      <div v-else>
        <v-list-item
          v-for="(song, i) in songs"
          :key="i"
          :value="song"
          color="primary"
          rounded="shaped"
        >
          <template v-slot:prepend>
            <v-icon :icon="`mdi-headphones`"></v-icon>
          </template>

          <template v-slot:append>
            <button @click="() => deleteSongs(song.id)">
              <v-icon :icon="`mdi-close`"></v-icon>
            </button>
          </template>

          <v-list-item-title v-text="song.title"></v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-card>
</template>
