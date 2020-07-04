import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "./Colors";

class TodoList extends React.Component {
  state = {
    showListVisible: false,
  };

  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

  render() {
    const item = this.props.item;
    const completedCount = item.todos.filter((todo) => todo.completed).length;
    const remainingCount = item.todos.length - completedCount;

    return (
      <TouchableOpacity
        key={item.name}
        style={[styles.listContainer, { backgroundColor: item.color }]}
        onPress={() => this.props.navigation.navigate("TodoPage", item)}
      >
        <Text style={styles.listTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 12,
    width: 200,
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderRadius: 5,
    alignItems: "center",
  },

  listTitle: {
    fontSize: 25,
    fontWeight: "1000",
    color: colors.white,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.white,
  },
});

export default TodoList;
