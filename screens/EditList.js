import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Colors from "../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from '@react-navigation/native';
import ColorSelector from '../components/ColorSelector';

const colorList = [
    "blue",
    "teal",
    "green",
    "olive",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blueGray",
];

export default ({navigation, route}) => {
    const [title, setTitle] = useState(route.params.title || "");
    const [color, setColor] = useState(route.params.color || "blue");
    const [isValid, setValidity] = useState(true);
    return(
        <View style={styles.container}>
            <View>
                <View style={{flexDirection: "row"}}>
                <Text styles={styles.label}>List Name</Text>
                {!isValid && <Text style={{marginLeft: 4, color: Colors.red, fontSize: 12}}
                >
                    * List Name Cannot Be Empty
                </Text>    
                }
                </View>
                <TextInput 
                    underlineColorAndroid={"transparent"}
                    selectionColor={"transparent"}
                    autoFocus={true}
                    value={title}
                    onChangeText={(text) => {setTitle(text);
                    setValidity(true)}}
                    placeholder={"Chnage Folder Name"}
                    maxLength={100}
                    style={[styles.input, { outline: "none"}]}
                />
            <Text styles={styles.label}>Color Settings</Text>
            <ColorSelector
                onSelect={(color) => {
                    setColor(color);
                    navigation.dispatch(CommonActions.setParams({headerColor: color}))
                }}
                selectedColor={color}
                colorOptions={colorList}
            />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={() => {
                if (title.length > 1){
                    route.params.saveChanges({title, color});
                    navigation.dispatch(CommonActions.goBack());
                } else {
                    setValidity(false);
                }

            }}>
                <Text style={{color: "white", fontSize: 24, fontWeight: "bold"}}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
        justifyContent: "space-between"
    },
    input: {
        color: Colors.darkGrey,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3, 
        height: 30,
        fontSize: 24,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: Colors.darkGray,
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color:Colors.black, 
        fontWeight: "bold", 
        fontSize:16,
        marginBottom: 8
    }
});