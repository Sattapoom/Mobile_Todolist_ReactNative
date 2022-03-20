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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import DataService from "../services/service";

const Edittodo = (props) => {
  
  
  const [state, setState] = useState({
    id: props.navigation.getParam('id'),
    title: props.navigation.getParam('title'),
    description: props.navigation.getParam('description'),
    finished: props.navigation.getParam('finished'),
    favor: props.navigation.getParam('favor'),
    rtime: props.navigation.getParam('rtime'),
    uri: props.navigation.getParam('uri'),
  });

  const [selectedTiming, setSelectedTiming] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  var remind_time = "";

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === "ios");
    if (mode == "date") {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode("time");
      setShow(Platform.OS !== "ios");
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === "ios");
      setMode("date");
    }
    setSelectedTiming(formatDate(date, time));
  };

 

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
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

  const handler = () => {
    if (selectedImage === null) {
      var uri= { uri: state.uri } 
    } else {
      var uri= { uri : selectedImage.localUri }
    }

    var id = state.id
    var data = {
      title: state.title,
      description: state.description,
      finished: state.finished,
      favor: state.favor,
      rtime: formatDate(date, time),
      uri: uri.uri ,
    };
    if (data.title.length == 0) {
      alert("Title field is missing");
    } else {
      DataService.update(id,data)
      
        .then(() => {
          setState({
            title: data.title,
            description: data.description,
            finished: data.finished,
            favor: data.favor,
            rtime: data.rtime,
            uri: data.imageUri,
          });

          alert("Todo updated");
          props.navigation.navigate("Home");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const formatDate = (date, time) => {
    let minute_str = time.getMinutes();
    if (time.getMinutes() < 10) {
      minute_str = "0" + time.getMinutes();
    }
    let return_val = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${time.getHours()}:${minute_str}`;

    remind_time = return_val;
    return return_val;
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View>
      <KeyboardAvoidingView>
        <TextInput
          multiline={true}
          placeholderTextColor={"#00ADB5"}
          style={styles.input_title}
          placeholder="Enter title"
          value={state.title}
          onChangeText={(newtext) => setState({ ...state, title: newtext })}
        />
        <View style>
          {selectedTiming !== null ? (
            <TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.remind_time}>{formatDate(date, time)}</Text>
          </TouchableOpacity>
        ) :<TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.remind_time}>{state.rtime}</Text>
          </TouchableOpacity>}
        </View>

       

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={420}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <TextInput
          multiline={true}
          placeholderTextColor={"#00ADB5"}
          style={styles.input}
          placeholder="Enter description"
          value={state.description}
          onChangeText={(newtext) =>
            setState({ ...state, description: newtext })
          }
        />
        <TouchableOpacity onPress={()=>console.log('fin')}>
          <Text style={styles.input}>finish: {state.finished}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>console.log('favor')}>
          <Text style={styles.input}>favourite: {state.favor}</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
      <View>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        {selectedImage !== null ? (
          <View>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
          </View>
        ) :<View>
            <Image
              source={{ uri: state.uri }}
              style={styles.thumbnail}
            />
          </View>}
      </View>
      <Button style={styles.button} title="update todo" onPress={handler} />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
    color: "#00ADB5",
    height: 40,
    width: "100%",
    fontSize: 18,
  },
  input_title: {
    marginLeft: 10,
    color: "#00ADB5",
    height: 50,
    width: "100%",
    fontSize: 32,
    marginTop: 20,
    marginBottom: 10,
  },
  remind_time: {
    marginLeft: 10,
    color: "#00ADB5",
    alignItems: "center",
    height: 50,
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "cyan",
    justifyContent: "center",
    alignContent: "center",
  },
  button_text: {
    fontSize: 30,
    color: "#EEEEEE",
    left: 10,
    bottom: 5,
  },
  thumbnail: {
    width: 360,
    height: 150,
    resizeMode: "contain",
  },
});

export default Edittodo;
