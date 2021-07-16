import React, { useState } from "react";
import { Console } from "./PlayerConsole";

export const MusicListScreen = () => {
  const songList = [
    { id: 0, duration: "03:20", title: "new world", isPlaying: false },
    { id: 1, duration: "02:50", title: "jazz in paris", isPlaying: false },
    { id: 2, duration: "04:14", title: "fall", isPlaying: false }
  ];
  const [songs, setSongs] = useState(songList);

  const selectItem = (ev) => {
    const id = parseInt(ev.currentTarget.dataset.item, 10);
    const _songs = songs.map(item => {
      const isThisItem = item.id === id;
      item.isPlaying = isThisItem ? !item.isPlaying : false;
      return item;
    });
    setSongs(_songs);
  };

  const control = () => {
    console.log(`szw console work`);
  };

  return (
    <div>
      {songs.map((item, index) => (
        <div key={`${item.title}-${index}`} onClick={selectItem} data-item={item.id}>
          <span className="playIcon"> {item.isPlaying ? "️️⏸" : "▶️"}</span>
          <span className="song">{item.title}</span>
        </div>
      ))}

      <Console callback={control} />

    </div>
  );
};
