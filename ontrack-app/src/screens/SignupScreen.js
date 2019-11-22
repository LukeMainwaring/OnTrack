import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import { signup, clearErrorMessage } from '../actions/auth';

const SignupScreen = ({ errorMessage, signup, clearErrorMessage }) => {
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Image
        source={require('../../assets/OnTrack-login.png')}
        style={styles.image}
      />
      <AuthForm
        errorMessage={errorMessage}
        submitButtonText='Sign Up'
        onSubmit={signup}
        redirectText='Already have an account? Sign in here'
        routeName='Signin'
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
    backgroundColor: '#42AEC6'
  },
  image: {
    flex: 1,
    height: null,
    width: null
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
