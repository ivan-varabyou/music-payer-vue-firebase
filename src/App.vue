<script setup lang="ts">
import { onMounted, ref } from "vue";
import SongsList from "@/components/SongsList.vue";
import SongsPlayer from "@/components/SongsPlayer.vue";
import type { Song } from "@/types";
import { getSongs, addSong } from "@/firebase/songs";

const isLoading = ref(false);
const addedNotifiacationShow = ref(false);
const songs = ref<Song[]>([]);
const playerSongs: Song[] = [
  { id: "1", title: "So What", artist: "Miles Davis", year: "1959" },
  { id: "2", title: "Smels", artist: "Nirvana", year: "1991" },
  { id: "3", title: "The Look", artist: "Roxette", year: "1988" },
];
const addToFavorite = async (songId: string) => {
  const song = playerSongs.find((song) => song.id === songId);
  if (song) {
    await addSong(song);
    addedNotifiacationShow.value = true;
  }
};
onMounted(() => getSongs(songs, isLoading));
</script>

<template>
  <main>
    <SongsPlayer :songs="playerSongs" @add-to-favorite="addToFavorite" />
    <SongsList :songs="songs" :isLoading="isLoading" />

    <v-snackbar
      :timeout="2000"
      color="primary"
      variant="tonal"
      v-model="addedNotifiacationShow"
    >
      Song added to favorite
    </v-snackbar>
  </main>
</template>

<style scoped></style>
