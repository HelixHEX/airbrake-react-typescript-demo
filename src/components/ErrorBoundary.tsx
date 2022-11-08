import React, { Component, ReactNode } from "react";
import { Notifier } from "@airbrake/browser";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: null }
> {
  airbrake;
  constructor(props: any) {
    super(props);
    this.state = { error: null };
    this.airbrake = new Notifier({
      projectId: process.env.REACT_APP_AB_PROJECT_ID,
      projectKey:process.env.REACT_APP_AB_PROJECT_KEY,
    });
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ error });
    // Send error to Airbrake
    this.airbrake.notify({
      error: error,
      params: { info: info },
    });
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
