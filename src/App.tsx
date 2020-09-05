import React from "react";
import "./App.scss";
import { Form } from "./components";
import { useRenderCount } from "./hooks";
import { randomString } from "./snippets/generator";

export default () => {
  useRenderCount("App");

  const [mPassword, mSetPassword] = React.useState("");

  const handleSubmit = (values: any) => {
    console.log(values);
    mSetPassword(
      randomString(values.length, {
        ...values,
      })
    );
  };

  return (
    <div className="container">
      <section>
        <Form onSubmit={handleSubmit} />
      </section>
      <hr />
      <div>{mPassword}</div>
    </div>
  );
};
