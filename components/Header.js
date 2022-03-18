import React, { useState } from "react";
import {  View,StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass,faPlus } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
    const [text, onChangeText] = useState("");
    const todos = props.todos;

    const Search = (keyword) =>{
        const showedTodo = [];
        if(todos!==[]){
        for (const [index, value] of todos.entries()) {
            if(value.title.toLowerCase().includes(keyword.toLowerCase())){
                showedTodo.push(value)
            }
        }}
        
        return props.onChangeTodos(showedTodo);
    }

    const pressHandler = () => {
        props.navigation.navigate('Addtodo')
    }

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Search ...'
                value={text}
            />
            {/* <TouchableOpacity
                activeOpacity={.5}
                style = {styles.button}
            >
                <Text style={styles.button_text}>+</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={{width:50}} onPress={()=>{Search(text)}}>
                <FontAwesomeIcon size={30} color={"#EEEEEE"} icon={faMagnifyingGlass}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:50}}>
                <FontAwesomeIcon size={30} color={"#EEEEEE"} icon={faPlus }/>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        paddingTop:26,
        flexDirection: "row",
        justifyContent:'center',
        width:'100%',
        height:120,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor:'#00ADB57D',
        color:'#EEEEEE',
    },
    input: {
        paddingHorizontal: 10,
        marginRight:15,
        width:'70%',
        height:40,
        borderRadius:24,
        backgroundColor:'#EEEEEE',
        color:'black',
        fontSize: 15
    },
    // button: {
    //     backgroundColor: 'green',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     borderWidth: 0,
    //     borderRadius: (40 / 2),
    //     width: 40,
    //     height: 40,
    //     left:350,
    //     bottom: 40
    // },
    // button_text:{
    //     fontSize: 30,
    //     color:"white",
    //     left:10,
    //     bottom:5
    // }
});

export default Header