import React, { useState } from "react";
import styled from "styled-components";

export default React.memo((props: TooltipProps) => {
  // File members
  const [mActive, mSetActive] = useState(false);
  return (
    <StyledTooltip
      onMouseEnter={() => mSetActive(true)}
      onMouseLeave={() => mSetActive(false)}
    >
      {props.children}
      <span className={`tooltip ${mActive ? "active" : ""}`}>
        {props.label}
      </span>
    </StyledTooltip>
  );
});

const StyledTooltip = styled.div`
  position: relative;
  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 30px;
    border-radius: 2px;
    background-color: black;
    color: white;
    font-size: 14px;
    transition: opacity 0.3s;
    opacity: 0;
    margin-bottom: 10px;
    &:after {
      content: "";
      position: absolute;
      width: 7px;
      height: 7px;
      background: black;
      transform: translateX(-50%) rotate(45deg);
      bottom: -3px;
      left: 50%;
    }
    &.active {
      opacity: 1;
    }
  }
`;

type TooltipProps = {
  label: string;
  children: JSX.Element;
};
