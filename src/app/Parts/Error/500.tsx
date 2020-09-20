import React from "react";
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
    return this.state.hasError ? <>Error!!!!</> : this.props.children;
  }
}

export default withRouter(ErrorScreen);
