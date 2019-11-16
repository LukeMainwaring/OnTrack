import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { signout } from '../actions/auth';

const AccountScreen = ({ signout }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signout
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountScreen);
