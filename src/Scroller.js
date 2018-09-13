import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class Scroller extends Component {
  render() {
    return (
      <ScrollView horizontal pagingEnabled style={styles.container}>
        <View style=[{styles.page}, {styles.red}]>
          <Text style={styles.content}> Welcome to the infamous scrollable tabs </Text>
        </View> 
        <View style=[{styles.page}, {styles.green}]>
          <Text style={styles.content}> We've got the best tabs on the block, and they are scrollable </Text>
        </View>
        <View style=[{styles.page}, {styles.blue}]>
          <Text style={styles.content}> How cool is that? </Text>
        </View> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  content: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  red: {
    backgroundColor: "#dd4b39"
  },
  green: {
    backgroundColor: "#27ae68"
  },
  blue: {
    backgroundColor: "#007bb6",
  }
  
});
