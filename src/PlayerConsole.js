import React from "react";

export const Console = (props) => {
  console.log(`child (Console) renders`);
  return (
    <div>
      <button onClick={props.callback}>Click Me!</button>
    </div>
  );
};


