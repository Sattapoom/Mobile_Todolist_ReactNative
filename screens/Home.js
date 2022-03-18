import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import Todolist from '../components/Todolist';

const testtodos = [
  {
    "id": "0",
    "title": "Buy milk",
    "description": "5.00",
    "finished":false,
    "favor":true
  },
  {
    "id": "1",
    "title": "Buy eggfdsssssssssssssssssssssssssssssssssssssssssss",
    "description": "At market.",
    "finished":false,
    "favor":false
  },
  {
    "id": "2",
    "title": "ซื้อผัดไทย",
    "description": "ปากซอย",
    "finished":true,
    "favor":false
  },
]

export default function App() {

  const [todos, onChangeTodos] = useState(testtodos);

  return (
    <View style={styles.container}>
      <Header todos={testtodos} onChangeTodos={onChangeTodos}/>
      <Todolist todos={todos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#222831',
    color:'#EEEEEE'
  },
});
