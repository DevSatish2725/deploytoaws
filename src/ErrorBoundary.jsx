import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const FallBack = ({ error }) => <div>{error.message}</div>;
const AppErrorBoundary = ({ children }) => {
  return <ErrorBoundary FallbackComponent={FallBack}>{children}</ErrorBoundary>;
};

export default AppErrorBoundary;
