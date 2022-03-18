import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import TodoPopup from "./TodoPopup";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Todolist = (props) => {
    
    const DATA = props.todos;

    const [selectedId, setSelectedId] = useState(null);
    const [visible,setVisible] = useState(false);
    const [title,setTitle] = useState("");


    const Item = ({ item, onPress,prvTitle}) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text style={[styles.title]}>{prvTitle}</Text>
            <TouchableOpacity style={styles.star} >
            <FontAwesomeIcon size={45} color={item.favor ? "#FFD600" : '#EEEEEE'} icon={faStar}/>
            </TouchableOpacity>  
        </TouchableOpacity>
    );

    const onClick = (item) => {
      setSelectedId(item.id)
      setVisible(true)
      setTitle(item.title)
    }

    const renderItem = ({ item }) => {
      let previewTitle = item.title;
      if(item.title.length>15)
      {
        previewTitle = item.title.slice(0,16) + "...";
      }
      return (
        <Item
          item={item}
          onPress={() => onClick(item)}
          prvTitle={previewTitle}
        />
      );
    };

    return(
        <View style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
            <TodoPopup visible={visible} setVisible={setVisible} title={title}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        marginTop:25,
        justifyContent:'center',
      },
    item: {
        flexDirection:'row',
        paddingHorizontal:25,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20,
        marginBottom:20,
        alignItems:'center',
        width: '75%',
        height:65,
        borderRadius:(65/2),
        backgroundColor:'#00ADB57D',
        color:'#EEEEEE',
    },
    title: {
        color:'#EEEEEE',
        fontSize: 24,
    },
    star:{
      marginLeft:'75%',
      position:'absolute',
      right: 0
    },
})

export default Todolist;