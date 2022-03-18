import React from "react";
import { StyleSheet, Modal, View, Text, Button } from "react-native";

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
                    <Text style={styles.title}>{title}</Text>
                    <Button title="Close" onPress={()=>{props.setVisible(false)}}/>
                </View>
            </View>
            
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        justifyContent: 'center',
        marginHorizontal: 16,
        margin:50,
        padding:40,
        borderRadius:10,
      },
      title: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 8,
      }
})

export default TodoPopup;