import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from "../constant/Colors"

export default ({isChecked, onCheked,  ...props}) => {
    return (
        <TouchableOpacity style={styles.checkbox} onPress={onCheked}>
            <Text style={{color: Colors.lightGray}}>{isChecked ? "✓" : ""}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        margin: 5,
        backgroundColor: "#fff0",
        color: Colors.darkGray,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.black,
        alignItems: "center",
        justifyContent: "center",
    }
})