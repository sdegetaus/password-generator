import { colors } from "assets";
import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

export default (props: CardProps) => {
  return (
    <StyledCard>
      <Menu />
      <div className="content">{props.children}</div>
    </StyledCard>
  );
};

const StyledCard = styled.section`
  border: 1px solid white;
  box-shadow: 0 6px 12px -5px rgba(0, 0, 0, 0.25);
  background-color: ${colors.bg.lightest};
  width: 650px;
  border-radius: 1px;
  padding: 25px;
  padding: 0;
  margin: 0;
  .content {
    padding: 25px;
  }
`;

type CardProps = {
  children: JSX.Element;
};
