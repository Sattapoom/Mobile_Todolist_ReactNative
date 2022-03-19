import React, { useState,useRef } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  actions,
  RichToolbar,
  RichEditor,

} from "react-native-pell-rich-editor";


const Addtodo = () => {
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
  };
  function onPressAddImage() {
    // you can easily add images from your gallery
    RichText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
    );
  }
  const richText = React.createRef() || useRef();
  return (
    <View style={{flex:1}}>
      
      <TextInput
        multiline={true}
        style={styles.input_title}
        placeholder="Enter title"
        onChangeText={(newtext) => setState({ ...state, title: newtext })}
      />
      <ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
                    <Text>Description:</Text>
                    <RichEditor
                        style={styles.input_desc}
                        onPressAddImage={onPressAddImage}
                        androidHardwareAccelerationDisabled={true}
                        ref={richText}
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
      </KeyboardAvoidingView>
      </ScrollView>
      <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline, 
            actions.heading1,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertImage,
            
          ]}
          iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
          onPressAddImage={()=>{openImagePickerAsync()
          .then(image => {
            let imageSrc = `data:${image.mime};base64,${image.data}`;
            richtext.insertImage({ src: imageSrc });
          });}}
      />
      {/* <Text style={{ height:1,width:"100%",backgroundColor:"black",margin:5}}></Text>
      <TextInput
        multiline={true}
        style={styles.input_desc}
        placeholder="Enter description"
        onChangeText={(newtext) => setState({ ...state, description: newtext })}
      />
      <Text style={styles.label}>Remind Time:</Text>
      <Text>{text}</Text>
      <TouchableOpacity onPress={() => showMode("date")} ><Text>DatePicker</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => showMode("time")} ><Text>TimePicker</Text></TouchableOpacity>
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
       <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handler} >
        <Text>Add</Text>
      </TouchableOpacity> */}
      
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
    color: "#EEEEEE",
  },
  input_title: {
    fontSize:32,
    color: "#EEEEEE",
   
  },
  input_desc: {
    fontSize:18,
    color: "#EEEEEE",
    minHeight:120,
   
  },
  button: {
    marginTop:20,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  
  },
  button_text: {
    fontSize: 30,
    color: "#EEEEEE",
  },
  thumbnail: {
    width: '300',
    height: 300,
    resizeMode: "contain",
  },
});


export default Addtodo