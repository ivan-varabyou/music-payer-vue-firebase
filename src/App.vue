<script setup lang="ts">
import { onMounted, ref } from "vue";
import SongsList from "@/components/SongsList.vue";
import SongsPlayer from "@/components/SongsPlayer.vue";
import type { Song } from "@/types";
import { getSongs } from "@/firebase/songs";

const songs = ref<Song[]>([]);
onMounted(() => getSongs(songs));
</script>

<template>
  <main>
    <SongsPlayer />
    <SongsList :songs="songs" />
  </main>
</template>

<style scoped></style>
