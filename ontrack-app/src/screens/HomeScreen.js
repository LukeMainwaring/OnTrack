import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';

const HomeScreen = ({}) => {
  return (
    <>
      <Header
        containerStyle={styles.headerContainer}
        centerComponent={{ text: 'Home', style: styles.headerTitle }}
      />
      <Text>HomeScreen</Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 125
  },
  headerTitle: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  }
});

export default HomeScreen;
