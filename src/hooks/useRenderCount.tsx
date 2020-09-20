import React from "react";

export default (id: string | null = null) => {
  const renders = React.useRef(0);
  if (id == null) {
    console.log(
      `Renders ${++renders.current} time${renders.current > 1 ? "s" : ""}`
    );
  } else {
    console.log(
      `${id} renders ${++renders.current} time${renders.current > 1 ? "s" : ""}`
    );
  }
};
