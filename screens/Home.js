import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DataService from '../services/service';
import Header from "../components/Header";
import Todolist from "../components/Todolist";
import { useFocusEffect } from '@react-navigation/native';

export default function Home() {
  const [textInput, onChangeInput] = useState("");
  const getAll = () => {
    DataService.getAll()
    .then((response) => {
      onChangeInput(response.data);
    })
  .catch((e) => {
    console.log(e);
  });}

  useFocusEffect(
    React.useCallback(() => {
      // console.log('focused')
      getAll();
      return () => {
        // console.log('unfocused')
      };
    }, [])
  );


  return (
    <View style={styles.container}>
      <Header
        onChangeInput={onChangeInput}
      />
      <Todolist textInput={textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    color: "#EEEEEE",
  },
});
