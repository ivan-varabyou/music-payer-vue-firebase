<script setup lang="ts">
import type { Song } from "../types";
const { songs } = defineProps<{ songs: Song[] }>();
</script>

<template>
  <v-card class="mx-auto pa-2" max-width="300">
    <v-list>
      <v-list-subheader>MUSIC PLAYER</v-list-subheader>
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

        <v-list-item-title v-text="song.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
