import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 800
  },
  textInput: {
    borderRadius: 16,
    marginHorizontal: 32,
    backgroundColor: 'lightgrey',
    marginVertical: 8,
  },
  headerMain: {
    height: 60,
    backgroundColor: Platform.OS === "android" ? "lightblue" : "red",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: Platform.OS === "android" ? "red" : "lightblue"
  },
  headerAndroid: {
    backgroundColor: "lightblue",
    borderBottomColor: "red"
  },
  headerIOS: {
    backgroundColor: "red",
    borderBottomColor: "lightblue"
  }
});

const KeyboardView = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <View style={{ ...styles.headerMain, ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }) }}>
          <Text>PLATFORM HEADER</Text>
        </View>
        <ScrollView contentContainerStyle={{...styles.container}}>
          <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "position"} keyboardVerticalOffset={0} >
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
            <TextInput style={{...styles.textInput}} />
          </KeyboardAvoidingView>
        </ScrollView>
      </>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;
