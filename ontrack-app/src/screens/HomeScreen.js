import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';

const HomeScreen = () => {
  return (
    <>
      <Header
        // TODO: convert leftComponent to custom drawer component
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Home', style: { color: '#fff' } }}
        backgroundColor='#53B6AF'
      />
      <Text>HomeScreen</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
