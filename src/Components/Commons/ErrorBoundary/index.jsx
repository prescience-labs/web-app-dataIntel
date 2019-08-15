// Component from https://reactjs.org/docs/error-boundaries.html
import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    throw new Error(error);
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
