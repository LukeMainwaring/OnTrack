import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { signin } from '../actions/auth';

const SigninScreen = ({ signin }) => {
  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={null}
        onSubmit={signin}
        submitButtonText='Sign in'
      />
      <NavLink text="Don't have an account? Sign up here" routeName='Signup' />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signin
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninScreen);
