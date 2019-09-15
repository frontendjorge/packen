import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Store from '../screens/StoreCarrousel';

export default function StoreScreen() {
  return (
    <ScrollView style={styles.container}>

      <Store/>
      
    </ScrollView>
  );
}

StoreScreen.navigationOptions = {
  //title: 'store',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#f9faff',
  },
});
