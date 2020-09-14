import React from "react";
import styled from "styled-components";

export default class ErrorHandler extends React.Component<
  any,
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error.message);
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <StyledErrorHandler>Something went wrong.</StyledErrorHandler>
    ) : (
      this.props.children
    );
  }
}

const StyledErrorHandler = styled.div``;
