import React, {useLayoutEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ColorPropType, FlatList } from 'react-native';
import Colors from "../constant/Colors"
import { Ionicons } from "@expo/vector-icons";
import { add } from 'react-native-reanimated';


const ListButton = ({title, color, onPress, onDelete, onOptions}) => {
    return(
        <TouchableOpacity 
        style={[styles.itemContainer, {backgroundColor: color}]}
        onPress={onPress}
        >
              <View>
                  <Text style={styles.itemTitle}>{title}</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                  <TouchableOpacity onPress={onOptions}>
                      <Ionicons name="options-outline" size={24} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onDelete}>
                      <Ionicons name="trash-outline" size={24} color="white"/>
                  </TouchableOpacity>
              </View>
          </TouchableOpacity>
    )
}

const AddListIcon = (addItem) => {
  return(
    <TouchableOpacity onPress={() => addItem({title: "Title", color: Colors.purple})}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  )
}
export default ({navigation}) => {
  const [dataList, setList] = useState([
    {title:"Printing", color: Colors.red}, 
    {title:"Designing", color: Colors.green},
    {title:"Costumers", color: Colors.blue}, 
  ]);
  const addItemToList = (item) => {
   dataList.push(item);
   setList([...dataList]);
  }

  const removeItemFromList = (index) => {
    dataList.splice(index, 1);
    setList([...dataList])
  }

  const updateItemFromList = (index, item) => {
    dataList[index] = item;
    setList([...dataList]);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => AddListIcon(addItemToList)
    })
  })
  return (
      <View style={styles.container}>
        <FlatList 
        data={dataList}
        renderItem={({item: {title, color}, index}) =>{
          return (
          <ListButton 
          title={title} 
          color={color} 
          navigation={navigation}
          onPress= {() => {navigation.navigate("ToDoList", {title, color})}}
          onOptions= {() => {navigation.navigate("Edit", {title, color, saveChanges: (item) => updateItemFromList(index, item)})}}
          onDelete={() => removeItemFromList(index)}
          />
          )
        }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    padding: 5,
    fontSize: 24,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 100,
      flex: 1,
      borderRadius: 20,
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 15,
  },
  itemTitle: {
      fontSize: 24,
      padding: 5,
      color: "white",
  },
});