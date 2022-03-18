import React from "react";
import { StyleSheet, Modal, View, Text,TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
const TodoPopup = (props) => {
    const visible = props.visible;
    const title = props.title;

    return(
        <Modal
            transparent={true}
            visible={visible}
        >
            <View style={{backgroundColor:"#000000aa",flex:1}}>
                <View style={styles.container}>
                    <View style={{marginLeft:'90%'}}>
                    <TouchableOpacity onPress={()=>{props.setVisible(false)}}>
                        <FontAwesomeIcon size={30} color={"#EEEEEE"} icon={faXmarkCircle}/>
                    </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </View>
            
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#393E46",
        color:'#EEEEEE',
        // justifyContent: 'center',
        marginHorizontal: 16,
        margin:50,
        padding:20,
        borderRadius:30,
        
      },
      title: {
        fontSize: 28,
        textAlign: 'center',
        color:'#EEEEEE',
        marginVertical: 8,
      }
})

export default TodoPopup;