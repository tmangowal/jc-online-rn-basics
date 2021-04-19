import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const WelcomeText = (props) => {
  return (
    <Text>{props.input}</Text>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: "blue",
  },
  heading1: {
    fontSize: 36,
    color: "red",
    fontWeight: "bold"
  },
  boxBlue: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
  boxRed: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  boxGreen: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
})

const Topic123 = () => {

  return (
    <View style={{ alignItems: "center" }}>
      {/* <Text style={styles.textStyle} >Hello World</Text>
      <Text style={styles.heading1}>
        Hello Teman-teman
      </Text>
      <Text style={{ ...styles.heading1, color: "green" }}>
        React <Text style={{ color: "lightblue"}}>Native</Text> 
      </Text>
      <WelcomeText input="Halo selamat datang" /> */}
      <View style={{ ...styles.boxBlue }}></View>
      <View style={{ ...styles.boxRed }}></View>
      <View style={{ ...styles.boxGreen }}></View>
    </View>
  );
};

export default Topic123;
