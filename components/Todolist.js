import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar } from "react-native";

const Todolist = (props) => {
    
    const DATA = props.todos;

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
    );



    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "gray" : "#white";
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };



    return(
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})

export default Todolist;