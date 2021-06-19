import React from "react";

export const Console = (props) => {
  console.log(`child render`);
  return (
    <div>
      <button onClick={props.job}>Click Me!</button>
    </div>
  );
};


