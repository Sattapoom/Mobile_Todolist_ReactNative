import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const Header = (props) => {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView style={styles.header}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder='Search ...'
            value={text}
        />
        <TouchableOpacity
            activeOpacity={.5}
            style = {styles.button}
        >
            <Text style={styles.button_text}>+</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 10,
      backgroundColor: 'black'
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        height: 40,
        width: 340,
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        fontSize: 15
    },
    button: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 0,
        borderRadius: (40 / 2),
        width: 40,
        height: 40,
        left:350,
        bottom: 40
    },
    button_text:{
        fontSize: 30,
        color:"white",
        left:10,
        bottom:5
    }
});

export default Header;