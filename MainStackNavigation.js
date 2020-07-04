import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./MainScreen";
import AddTODO from "./AddTODO";
import TodoPage from "./TodoPage";
import TodoList from "./TodoList";
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="AddTODO"
          component={AddTODO}
          options={{
            headerShown: false,
            title: "",
            headerStyle: styles.header,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="TodoPage"
          component={TodoPage}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
  },
});
