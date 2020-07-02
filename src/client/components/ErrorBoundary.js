import React, { Component } from 'react';
import axios from 'axios';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

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
    return Promise.reject(error);
  });

  getErrorTemplate = () => (
    <div className="error-boundary">
      <span>Sorry, something broke...</span>
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