import { colors } from "assets";
import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: ${colors.bg.dark};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  color: ${colors.text.base};
`;

export default StyledLayout;
