import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Anoti", duration: "3:05", artist: "MI Abaga" },
    { title: "Crazy things", duration: "3:45", artist: "Tems" },
    { title: "Mood", duration: "4:05", artist: "Wizkid ft Buju" },
    { title: "Peru", duration: "3:00", artist: "Fireboy DML" },
    {
      title: "Essence",
      duration: "5:05",
      artist: "Wizkid ft Tems & Justin Bieber",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
