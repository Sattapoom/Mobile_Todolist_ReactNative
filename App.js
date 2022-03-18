import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Todolist from './components/Todolist';

const testtodos = [
  {
    id: "0",
    title: "Buy milk",
    description: "5.00"
  },
  {
    id: "1",
    title: "Buy egg",
    description: "At market."
  },
  {
    id: "2",
    title: "ซื้อผัดไทย",
    description: "ปากซอย"
  },
]

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <Todolist todos={testtodos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
});
