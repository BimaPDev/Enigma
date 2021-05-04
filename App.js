import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Home from "./screens/Home"
import ToDoList from "./screens/ToDoList"
import EditList from "./screens/EditList"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Enigma" component={Home}/>
        <Stack.Screen name="ToDoList" component={ToDoList} options={({route})=>{
          return({
            title: route.params.title,
             headerStyle: {
                backgroundColor: route.params.color
              },
             headerTintColor: "white"
            })
          }}
        />
        <Stack.Screen name="Edit" component={EditList} options={({route})=>{
          return({
            title: route.params.title ? `Edit ${route.params.title} Title`: "Create New Title",
             headerStyle: {
                backgroundColor: route.params.color
              },
             headerTintColor: "white"
            })
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
