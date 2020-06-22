import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../Colors";
// import colors from "../Colors";

let TodoList = ({ item }) => {
  return (
    <View style={styles.listContainer} key={item.name}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 20,
    backgroundColor: colors.blue,
    width: 200,
    padding: 30,
    borderRadius: 5,
  },
});

export default TodoList;
