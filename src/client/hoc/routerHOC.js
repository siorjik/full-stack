import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchSession } from '../sagas/session';
import setAuthToken from '../../utils/helpers/setAuthToken';

const routerHOC = (Comp) => {
  class RouterWrapper extends Component {
    constructor(props) {
      super(props);

      this.localeStorageToken = localStorage.getItem('token') || null;
    }

    componentDidMount() {
      if(this.localeStorageToken) {
        setAuthToken();
        this.props.fetchSession();
      }
    }

    render() {
      const { session: { data } } = this.props;

      const isSession = !!Object.keys(data).length;

      return (
        <Fragment>
          {this.localeStorageToken ?
            isSession && <Comp isSession={isSession} { ...this.props } /> :
            <Comp isSession={isSession} { ...this.props } />}
        </Fragment>
      );
    }
  }

  const mapStateToProps = (state) => ({
    session: state.session,
  });
  
  const mapDispatchToProps = {
    fetchSession,
  };

  return connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);
};

export default routerHOC;
