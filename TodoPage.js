import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "./Colors";
export default class TodoPage extends React.Component {
  state = {};
  componentWillReceiveProps(props) {
    this.setState({
      route: this.props,
    });
  }

  renderItem = (todo) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity>
          <Ionicons
            name={todo.completed ? "ios-square" : "ios-square-outline"}
            size={26}
            color={colors.gray}
            style={{ width: 32 }}
          ></Ionicons>
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              color: todo.completed ? colors.gray : colors.black,
              textDecorationLine: todo.completed ? "line-through" : "none",
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    );
  };

  render() {
    const name = this.props.route.params.name;
    const color = this.props.route.params.color;
    const todos = this.props.route.params.todos;
    const taskCount = todos.length;
    const completedCount = todos.filter((todo) => todo.completed).length;

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={[styles.close, { zIndex: 1 }]}
          onPress={() => this.props.navigation.pop()}
        >
          <AntDesign name="close" size={24} color={"#000"}></AntDesign>
        </TouchableOpacity>
        <View
          style={[styles.section, styles.header, { borderBottomColor: color }]}
        >
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} of {taskCount} tasks completed.
            </Text>
          </View>
        </View>
        <View style={[styles.section, { flex: 3 }]}>
          <FlatList
            data={todos}
            renderItem={({ item }) => this.renderItem(item)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{
              paddingHorizontal: 32,
              paddingVertical: 64,
            }}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
        <KeyboardAvoidingView
          style={[styles.section, styles.footer]}
          behavior="padding"
        >
          <TextInput
            placeholder="Add an item..."
            style={[styles.input, { backgroundColor: colors.white }]}
          ></TextInput>
          <TouchableOpacity
            style={[styles.addTodo, { backgroundColor: color }]}
          >
            <AntDesign
              name="plus"
              size={20}
              color={colors.white}
              style={{ fontWeight: "600" }}
            ></AntDesign>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  close: {
    position: "absolute",
    top: 25,
    right: 25,
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
  },
  taskCount: {
    marginTop: 4,
    fontSize: 18,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: colors.black,
    fontWeight: "700",
    fontSize: 16,
  },
});
