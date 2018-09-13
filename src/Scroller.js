import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default class Scroller extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.page}>
          <Text style={styles.content}> textInComponent </Text>
        </View>
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
  },
  page: {},
  content: {}
});
