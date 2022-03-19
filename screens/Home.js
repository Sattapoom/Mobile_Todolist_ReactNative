import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Todolist from "../components/Todolist";

export default function Home({ navigation }) {
  const [textInput, onChangeInput] = useState();

  return (
    <View style={styles.container}>
      <Header
        onChangeInput={onChangeInput}
        navigation={navigation}
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
