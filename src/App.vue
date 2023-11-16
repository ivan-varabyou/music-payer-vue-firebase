<script setup lang="ts">
import { onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/config";

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "songs"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
</script>

<template>
  <main></main>
</template>

<style scoped></style>
