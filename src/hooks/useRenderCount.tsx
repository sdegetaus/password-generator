import React from "react";

export default (id = "") => {
  const renders = React.useRef(0);
  console.log(`${id}`, `renders ${++renders.current} times`);
};
