import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = {
    hasError: false
  }
  static getDerivedStateFromError(error: any) {
    console.log('inside getDerivedStateFromError', error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    console.log(this.state.hasError)
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;