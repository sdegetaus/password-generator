import React from "react";
import Error500 from "./500";
import { withRouter } from "react-router-dom";

class ErrorScreen extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info);
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? <Error500 /> : this.props.children;
  }
}

export default withRouter(ErrorScreen);
