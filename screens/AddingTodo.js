import React from "react";
import { StyleSheet, View } from "react-native";

import Addtodo from "../components/Addtodo";
import HeaderAdd from "../components/HeaderAdd";
export default function AddingTodo({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderAdd navigation={navigation} />
      <Addtodo navigation={navigation} />
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
