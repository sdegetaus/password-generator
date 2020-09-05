import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

export default (props: TabsProps) => {
  const [mActiveKey, mSetActiveKey] = React.useState(props.activeKey || 0);

  const handleClick = (key: number) => {
    mSetActiveKey(key);
    if (props.onClick != null) {
      props.onClick(key);
    }
  };

  return (
    <StyledTabs className="tabs">
      {props.panes.map((o, i) => (
        <li
          key={i}
          className={mActiveKey === i ? "active" : undefined}
          onClick={() => handleClick(i)}
        >
          {o.label}
        </li>
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  li {
    transition: color 0.3s;
    text-shadow: 0 1px white;
    font-size: 18px;
    display: inline-flex;
    border-bottom: 1px solid white;
    cursor: pointer;
    padding: 15px 0;
    width: 50%;
    justify-content: center;
    background-color: ${colors.bg.light};
    color: ${colors.text.disabled};
    font-weight: 400;
    &:hover:not(.active) {
      color: ${colors.text.base};
    }
    box-shadow: inset 0px -10px 10px -13px rgba(0, 0, 0, 0.25);
  }
  .active {
    box-shadow: none;
    border-bottom-color: ${colors.bg.lightest};
    color: ${colors.red.base};
    background-color: ${colors.bg.lightest};
  }
`;

type TabsProps = {
  activeKey?: number;
  panes: PaneProps[];
  onClick?: (key: number) => void;
};

type PaneProps = {
  label: string;
};
