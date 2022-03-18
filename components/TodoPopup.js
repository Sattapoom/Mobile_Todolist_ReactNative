import React from "react";
import { StyleSheet, Modal, View, Text,TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faXmarkCircle, faGear } from '@fortawesome/free-solid-svg-icons'

const TodoPopup = (props) => {
    const visible = props.visible;
    const todo = props.todo;

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
                    {todo===null? 
                        <noscript></noscript> :
                        <>
                            <View>
                                <Text style={styles.title}>{todo.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.info}>Description : {todo.description}</Text>
                                <Text style={styles.info}>Finished : {todo.finished? "yes":"no"}</Text>
                                <Text style={styles.info}>Favorite : {todo.favor? "yes":"no"}</Text>
                            </View>
                        </>
                    }
                    <TouchableOpacity>
                        <FontAwesomeIcon style={{marginLeft:"90%"}}size={30} color={"#EEEEEE"} icon={faGear} />
                    </TouchableOpacity>
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
      },
      info: {
        fontSize: 23,
        textAlign: 'left',
        color:'#EEEEEE',
        marginVertical: 8,
      }
})

export default TodoPopup;