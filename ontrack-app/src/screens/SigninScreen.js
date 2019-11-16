import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { signin, clearErrorMessage } from '../actions/auth';

const SigninScreen = ({ signin, errorMessage, clearErrorMessage }) => {
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        errorMessage={errorMessage}
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

const mapStateToProps = ({ auth }) => {
  return { errorMessage: auth.errorMessage };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signin,
      clearErrorMessage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninScreen);
