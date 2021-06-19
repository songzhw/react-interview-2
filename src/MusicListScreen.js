import React, { useState } from "react";
import { Console } from "./PlayerConsole";

export const MusicListScreen = () => {
  const songList = [
    { id: 0, duration: "03:20", title: "new world", isPlaying: false },
    { id: 1, duration: "02:50", title: "jazz in hz", isPlaying: false },
    { id: 2, duration: "04:14", title: "wonderful yi", isPlaying: false }
  ];
  const [data, setData] = useState(songList);

  const selectItem = (ev) => {
    const id = parseInt(ev.currentTarget.dataset.item, 10);
    const songs = data.map(item => {
      const isThisItem = item.id === id;
      item.isPlaying = isThisItem ? !item.isPlaying : false;
      return item;
    });
    setData(songs);
  };

  const work = () => {
    console.log(`szw work`);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={`${item.title}-${index}`} onClick={selectItem} data-item={item.id}>
          <span className="playIcon"> {item.isPlaying ? "️️⏸" : "▶️"}</span>
          <span className="song">{item.title}</span>
        </div>
      ))}

      <Console job={work} />

    </div>
  );
};
