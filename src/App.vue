<script setup lang="ts">
import { onMounted, ref } from "vue";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/config";
import { reactive } from "vue";

interface Songs {
  id: string;
  title: string;
  artist: string;
  year: string;
}

const songs = ref<Songs[]>([]);

onMounted(async () => {
  const q = query(collection(db, "songs"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const tempSongs: Songs[] = [];
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Songs);
    });
    songs.value = tempSongs;
  });
});
</script>

<template>
  <main>
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
  </main>
</template>

<style scoped></style>
