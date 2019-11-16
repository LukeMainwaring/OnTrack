import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { signup, clearErrorMessage, tryLocalSignin } from '../actions/auth';

const SignupScreen = ({
  errorMessage,
  navigation,
  signup,
  clearErrorMessage
}) => {
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        errorMessage={errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        routeName='Signin'
        text='Already have an account? Sign in here'
      />
      <Button
        title='Go to main flow'
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
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
      signup,
      clearErrorMessage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);
