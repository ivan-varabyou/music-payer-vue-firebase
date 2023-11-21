import {
  collection,
  query,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";
import type { Song } from "../types";
import type { Ref } from "vue";

const DB_NAME = "songs";

export const getSongs = (songs: Ref<Song[]>, isLoading: Ref<boolean>) => {
  isLoading.value = true;
  const q = query(collection(db, DB_NAME));
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = [];
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Song);
    });
    songs.value = tempSongs;
    isLoading.value = false;
  });
};

export const addSong = async (song: Song) => {
  const result = await addDoc(collection(db, DB_NAME), {
    title: song.title,
    artist: song.artist,
    year: song.year,
  });
  console.log("result", result);
};

export const deleteSongs = async (songId: string) => {
  const result = await deleteDoc(doc(db, DB_NAME, songId));
  console.log("result", result);
};
