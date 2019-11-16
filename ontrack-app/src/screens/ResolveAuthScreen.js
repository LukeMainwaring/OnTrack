import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tryLocalSignin } from '../actions/auth';

const ResolveAuthScreen = ({ tryLocalSignin }) => {
  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      tryLocalSignin
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResolveAuthScreen);
