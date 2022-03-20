import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmarkCircle, faGear , faTrash} from "@fortawesome/free-solid-svg-icons";
import * as RootNavigation from '../RootNavigation.js';
import DataService from "../services/service"

const TodoPopup = (props) => {
  const visible = props.visible;
  const todo = props.todo;

  const pressHandler = () => {
    props.setVisible(false)
    RootNavigation.navigate('Edit', props.todo)
  }

  const getAll = () => {
    DataService.getAll()
    .then((response) => {
    const data = response.data;
    const showedTodo = [];
    if(data!==[] && props.textInput !== ''){
      data.forEach((value) => {
          if(value.title.toLowerCase().includes(props.textInput.toLowerCase())){
              showedTodo.push(value)
          }
      });
      props.onChangeDATA(showedTodo);
    }
    else{
      props.onChangeDATA(data);
    }
  })
  .catch((e) => {
    console.log(e);
  });}

  const deleteHandler = (todo) => {
    DataService.delete(todo.id)
    .then(response => {
      props.setVisible(false)
      getAll();
    })
    .catch(e => {
      console.log(e)
    })
  }

  return (
    <Modal transparent={true} visible={visible}>
      <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
        <View style={styles.container}>
          <View style={{ marginLeft: "90%" }}>
            <TouchableOpacity
              onPress={() => {
                props.setVisible(false);
              }}
            >
              <FontAwesomeIcon
                size={30}
                color={"#EEEEEE"}
                icon={faXmarkCircle}
              />
            </TouchableOpacity>
          </View>
          {todo === null ? (
            <noscript></noscript>
          ) : (
            <>
              <View>
                <Text style={styles.title}>{todo.title}</Text>
              </View>
              <View>
                <Text style={styles.info}>
                  Description : {todo.description}
                </Text>
                <Text style={styles.info}>
                  Finished : {todo.finished ? "yes" : "no"}
                </Text>
                <Text style={styles.info}>
                  Favorite : {todo.favor ? "yes" : "no"}
                </Text>
                <Text style={styles.info}>Remind Time : {todo.rtime}</Text>
                <Image source={{ uri: todo.uri }} style={styles.thumbnail} />
              </View>
              
            </>
          )}
          {todo !== null ? (
            <TouchableOpacity>
            <FontAwesomeIcon
              style={{ marginLeft: "70%" }}
              size={30}
              color={"#EEEEEE"}
              icon={faTrash}
              onPress={() => {deleteHandler(todo)}}
            />
            </TouchableOpacity>
          ) : <noscript></noscript>
          }
          <TouchableOpacity>
            <FontAwesomeIcon
              style={{ marginLeft: "90%" }}
              size={30}
              color={"#EEEEEE"}
              icon={faGear}
              onPress={pressHandler}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393E46",
    color: "#EEEEEE",
    // justifyContent: 'center',
    marginHorizontal: 16,
    margin: 50,
    padding: 20,
    borderRadius: 30,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: "#EEEEEE",
    marginVertical: 8,
  },
  info: {
    fontSize: 23,
    textAlign: "left",
    color: "#EEEEEE",
    marginVertical: 8,
  },
  thumbnail: {
    width: 360,
    height: 150,
    resizeMode: "contain",
  },
});

export default TodoPopup;
