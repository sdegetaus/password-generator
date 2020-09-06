import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { colors } from "styles/colors";

export default () => {
  // File members
  const mHistory = useHistory();
  const [mActiveKey, mSetActiveKey] = React.useState(() => {
    switch (mHistory.location.pathname.substring(1)) {
      default:
      case "":
        return 0;
      case "about":
        return 1;
    }
  });

  // Functions
  const handleClick = (key: number) => {
    mSetActiveKey(key);
  };

  return (
    <StyledTabs className="tabs">
      {items.map((o, i) => (
        <Link
          key={i}
          to={o.to}
          className={mActiveKey === i ? "active" : undefined}
          onClick={() => handleClick(i)}
        >
          {o.label}
        </Link>
      ))}
    </StyledTabs>
  );
};

const items: MenuItem[] = [
  {
    label: "Generator",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
];

const StyledTabs = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  a {
    text-decoration: none;
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
    pointer-events: none;
    cursor: default;
    box-shadow: none;
    border-bottom-color: ${colors.bg.lightest};
    color: ${colors.blue.dark};
    background-color: ${colors.bg.lightest};
  }
`;

type MenuItem = {
  label: string;
  to: string;
};
