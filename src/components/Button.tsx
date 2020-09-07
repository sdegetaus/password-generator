import React from "react";
import styled from "styled-components";
import { colors } from "assets";

export default (props: ButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  transition: background-color 0.3s;
  appearance: none;
  border: none;
  outline: none;
  background-color: ${colors.blue.dark};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font: inherit;
  padding: 7px 20px;
  border-radius: 2px;
  &:hover {
    background-color: ${colors.blue.base};
  }
`;

type ButtonProps = {
  children?: string | JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
