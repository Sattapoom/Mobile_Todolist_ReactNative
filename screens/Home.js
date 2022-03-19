import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Todolist from "../components/Todolist";
import DataService from "../services/service";

export default function Home({ navigation }) {
  const [todos, onChangeTodos] = useState();
  DataService.getAll()
    .then((response) => {
      onChangeTodos(response.data);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <View style={styles.container}>
      <Header
        todos={todos}
        onChangeTodos={onChangeTodos}
        navigation={navigation}
      />
      <Todolist todos={todos} />
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
