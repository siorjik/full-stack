import React, { Component } from 'react';
import axios from 'axios';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErr: false,
    };

    this.checkResponse();
  }

  static getDerivedStateFromError(err) {
    console.error(err);
    return { hasErr: true }
  }
  
  componentDidCatch(err, errInfo) {
    console.error(err, errInfo);
  }

  checkResponse = () => axios.interceptors.response.use((resp) => {
    return resp;
  }, (error) => {
    this.setState({ hasErr: true });

    if (error.response.status === 403) localStorage.clear();

    return Promise.reject(error);
  });

  getErrorTemplate = () => (
    <div className="error-boundary">
      <span>Sorry, something broken...</span>
    </div>
  )

  render() {
    const { hasErr } = this.state;
    const { children } = this.props;

    if (hasErr) return this.getErrorTemplate();
    else return children;
  }
}

export default ErrorBoundary;