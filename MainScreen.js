import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./tempData";
import TodoList from "./TodoList";

let Dimension = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

class MainScreen extends React.Component {
  state = {
    addTodoVisible: false,
  };

  componentWillReceiveProps(nextProps) {
    // update original states
    this.setState({
      navigation: this.props,
    });
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderToDo(item, navigation) {
    return <TodoList item={item} navigation={navigation}></TodoList>;
  }

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
        {/* Add icon */}
        <View style={{ marginVertical: 48, alignSelf: "center" }}>
          <TouchableOpacity
            style={styles.addList}
            onPress={() => this.props.navigation.navigate("AddTODO")}
          >
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
            renderItem={({ item }) =>
              this.renderToDo(item, this.props.navigation)
            }
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
export default MainScreen;
