import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import Header from '../components/Header';
import Todolist from '../components/Todolist';

const testtodos = [
  {
    id: "0",
    title: "Buy milk",
    description: "5.00",
    favor:true
  },
  {
    id: "1",
    title: "Buy eggfdsssssssssssssssssssssssssssssssssssssssssss",
    description: "At market.",
    favor:false
  },
  {
    id: "2",
    title: "ซื้อผัดไทย",
    description: "ปากซอย",
    favor:false
  },
]

export default function Home({navigation}) {
  const [todos, onChangeTodos] = useState(testtodos);

  return (
    <View style={styles.container}>
      <Header todos={testtodos} onChangeTodos={onChangeTodos} navigation={ navigation }/>
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
