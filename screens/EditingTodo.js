import React from "react";
import { StyleSheet, View } from "react-native";

import Edittodo from "../components/Edittodo";
import HeaderAdd from "../components/HeaderAdd";
export default function EditingTodo({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderAdd navigation={navigation} titletodo='Edit todo'/>
      <Edittodo navigation={navigation} />
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
