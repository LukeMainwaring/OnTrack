import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { signup } from '../actions/auth';

const SignupScreen = ({ errorMessage, navigation, signup }) => {
  return (
    <View style={styles.container}>
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
      signup
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);
