import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signup } from '../actions/auth';
import Spacer from './Spacer';
import NavLink from './NavLink';

const SignupForm = ({ errorMessage, signup }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formStyle}>
      <Card
        containerStyle={styles.cardStyle}
        title='Create Account'
        titleStyle={styles.cardTitleStyle}
      >
        <Input
          containerStyle={styles.inputStyle}
          leftIcon={{
            type: 'material-icons',
            name: 'person',
            size: 40,
            color: '#BCBCBC'
          }}
          leftIconContainerStyle={{ paddingRight: 10 }}
          // label='Email'
          placeholder='First Name'
          value={firstName}
          onChangeText={setFirstName}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Spacer />
        <Input
          containerStyle={styles.inputStyle}
          leftIcon={{
            type: 'material-icons',
            name: 'person',
            size: 40,
            color: '#BCBCBC'
          }}
          leftIconContainerStyle={{ paddingRight: 10 }}
          // label='Email'
          placeholder='Last Name'
          value={lastName}
          onChangeText={setLastName}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Spacer />
        <Input
          containerStyle={styles.inputStyle}
          leftIcon={{
            type: 'material-icons',
            name: 'email',
            size: 40,
            color: '#BCBCBC'
          }}
          leftIconContainerStyle={{ paddingRight: 10 }}
          // label='Email'
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Spacer />
        <Input
          containerStyle={styles.inputStyle}
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            size: 40,
            color: '#BCBCBC'
          }}
          leftIconContainerStyle={{ paddingLeft: 6, paddingRight: 17 }}
          secureTextEntry
          // label='Password'
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          autoCorrect={false}
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Spacer>
          <Button
            buttonStyle={styles.buttonStyle}
            title='Sign Up'
            titleStyle={styles.buttonTitleStyle}
            onPress={() => signup({ firstName, lastName, email, password })}
          />
        </Spacer>
        <NavLink
          redirectText='Already have an account? Sign in here'
          routeName='Signin'
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardStyle: {
    borderRadius: 45
  },
  cardTitleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25
  },
  formStyle: {
    marginBottom: 75
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
  buttonStyle: {
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    width: 275
  },
  inputStyle: {
    alignSelf: 'center',
    marginTop: 15,
    width: 325
  }
});

const mapStateToProps = ({}) => {
  return {};
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
)(SignupForm);
