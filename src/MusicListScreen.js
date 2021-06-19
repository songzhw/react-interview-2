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
      item.isPlaying = item.id === id;
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

          {item.isPlaying ?
            <img className="playIcon" src={require("./res/ic_play.png")} alt="" />
            : <img className="playIcon" src={require("./res/ic_music.png")} alt="" />
          }

          <span className="song">{item.title}</span>
        </div>
      ))}

      <Console job={work} />

    </div>
  );
};
