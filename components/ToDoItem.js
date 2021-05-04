import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Colors from "../constant/Colors";
import Checkbox from "./Checkbox";

export default ({text, isChecked, onChecked}) => {
    return (
        <View styles={styles.container}>
            <View style={{flexDirection: "row", flex: 1}}>
                <Checkbox isChecked={isChecked} onChecked={onChecked}/>
                <Text>{text}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10",
    }, 
    icon: {
        padding: 5,
        fontSize: 16,
    },
})