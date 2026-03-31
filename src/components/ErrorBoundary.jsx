import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasEror: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasEror) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
