import styled from "styled-components";

export const StyledError = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.color};
  flex-wrap: wrap;
  .title {
    width: 100%;
    margin-bottom: 25px;
    color: white;
    font-weight: 500;
    font-size: 50px;
    text-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
  }
  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font: inherit;
      font-size: 18px;
      font-weight: 300;
      transition: all 0.3s;
      color: white;
      text-decoration: none;
      background: rgba(0, 0, 0, 0.2);
      padding: 12px 65px;
      border-radius: 30px;
      box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
