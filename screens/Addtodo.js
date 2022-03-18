import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";



const Addtodo = ({navigation}) => {
  const [state, setState] = useState({
    title: "",
    description: "",
    remind: "",
    status: "unfinished",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("time");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };
  if (selectedImage !== null) {
    return (
      <View>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  const handler = () => {
    var data = {
      title: state.title,
      description: state.description,
      remind: text,
      status: "unfinished",
    };
    if (data.title.length == 0 || data.description.length == 0) {
      alert("Some input field is still missing");
    } else if (data.remind == "time") {
      alert("Please select remind time");
    } else {
      alert("fetch code here");
    }
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        onChangeText={(newtext) => setState({ ...state, title: newtext })}
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        onChangeText={(newtext) => setState({ ...state, description: newtext })}
      />
      <Text style={styles.label}>Remind Time:</Text>
      <Text>{text}</Text>
      <Button title="DatePicker" onPress={() => showMode("date")} />
      <Button title="TimePicker" onPress={() => showMode("time")} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Button style={styles.button} title="add" onPress={handler} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: "black",
  },
  label: {
    backgroundColor: "white",
    color: "black",
    height: 40,
    width: 340,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    fontSize: 18,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    height: 40,
    width: 340,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 0,
    borderRadius: 40 / 2,
    width: 40,
    height: 40,
    left: 350,
    bottom: 40,
  },
  button_text: {
    fontSize: 30,
    color: "white",
    left: 10,
    bottom: 5,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});


export default Addtodo