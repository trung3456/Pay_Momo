import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import stage_one from "./src/components/stage_one";

class App extends Component {
  render() {
    return (
      <View>
        <stage_one/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {  },
});

export default stage_one;