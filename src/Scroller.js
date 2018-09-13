import React, { Component } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default class Scroller extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> textInComponent </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    //: "center",
    // backgroundColor: "#FFF"
  }
});
