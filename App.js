import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import { Dimensions } from "react-native";
import tempData from "./tempData";
import TodoList from "./components/TodoList";

let Dimension = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.divider} />
          <Text style={styles.title}>
            Todo
            <Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
          </Text>
          <Text style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48, alignSelf: "center" }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={20} color={colors.blue}></AntDesign>
          </TouchableOpacity>
          <Text style={styles.add}>Add list</Text>
        </View>
        <View style={{ height: 280, paddingLeft: 20 }}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList item={item}></TodoList>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 4,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 10,
  },
});
