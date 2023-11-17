import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "./config";
import type { Song } from "../types";
import type { Ref } from "vue";

const DB_NAME = "songs";

export const getSongs = (songs: Ref<Song[]>) => {
  const q = query(collection(db, DB_NAME));
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = [];
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Song);
    });
    songs.value = tempSongs;
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
