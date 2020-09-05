import React from "react";
import styled from "styled-components";
import { Form, Tabs } from "./components";
import { useRenderCount } from "./hooks";
import { colors } from "./styles/colors";
import packageJson from "../package.json";

export default () => {
  useRenderCount("App");

  return (
    <StyledApp>
      <section className="title">
        <h1>Password Generator</h1>
        <span>({packageJson.version})</span>
      </section>
      <section className="card">
        <Tabs />
        <div className="content">
          <Form />
        </div>
      </section>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: ${colors.bg.dark};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-flow: column;
  color: ${colors.text.base};
  .title {
    margin: 40px 0;
    text-align: center;
    h1 {
      color: white;
      font-weight: 500;
      font-size: 50px;
      text-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
    }
    span {
      color: ${colors.bg.lightest};
      font-weight: 300;
      font-size: 12px;
    }
  }
  .card {
    border: 1px solid white;
    box-shadow: 0 6px 12px -5px rgba(0, 0, 0, 0.25);
    background-color: ${colors.bg.lightest};
    width: 650px;
    border-radius: 1px;
    padding: 25px;
    padding: 0;
    margin: 0;
  }
  .content {
    padding: 25px;
  }
`;
