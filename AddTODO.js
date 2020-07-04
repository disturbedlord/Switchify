import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import { TextInput } from "react-native-gesture-handler";
import tempData from "./tempData";

class AddTODO extends React.Component {
  backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#5958D9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];

  state = {
    name: "",
    color: this.backgroundColors[0],
  };

  componentWillReceiveProps(props) {
    this.setState({ navigation: this.props });
  }

  renderColorSelect() {
    return this.backgroundColors.map((color) => (
      <TouchableOpacity
        key={color}
        onPress={() => this.setState({ color: color })}
        style={[styles.colorSelect, { backgroundColor: color }]}
      ></TouchableOpacity>
    ));
  }

  createTODO = () => {
    const { name, color } = this.state;
    tempData.push({
      name,
      color,
      todos: [],
    });
    this.setState({ text: "" });
    this.props.navigation.pop();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 25, right: 25 }}
          onPress={() => this.props.navigation.pop()}
        >
          <AntDesign name="close" size={24} color={colors.black}></AntDesign>
        </TouchableOpacity>

        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            Create Todo List
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Add a new Todo..."
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })}
          ></TextInput>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {this.renderColorSelect()}
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: this.state.color }]}
            onPress={this.createTODO}
          >
            <Text style={styles.create}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 4,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    fontSize: 18,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "600",
  },
  button: {
    flex: 1,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  colorSelect: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
});

export default AddTODO;
