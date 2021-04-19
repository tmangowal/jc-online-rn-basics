import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ExampleImage from '../assets/images/landscape.jpg';

const IMAGE_WIDTH_HEIGHT = Dimensions.get("window").width * 0.7
const BUTTON_MARGIN = 16

const styles = StyleSheet.create({
  button: {
    // width: Dimensions.get('window').width > 350 ? 175 : 105,
    width: Dimensions.get("window").width - (BUTTON_MARGIN * 2),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 6,
    marginHorizontal: 2,
    alignSelf: "center"
  },
  buttonA: {
    backgroundColor: 'lightblue',
  },
  buttonB: {
    backgroundColor: 'pink',
  },
  image: {
    width: IMAGE_WIDTH_HEIGHT,
    height: IMAGE_WIDTH_HEIGHT,
    borderRadius: (IMAGE_WIDTH_HEIGHT) * 0.5
  }
});

const TopicDimensions = () => {
  return (
    <View>
      <Image
        source={ExampleImage}
        style={{
          ...styles.image
        }}
      />
      <TouchableOpacity style={{ ...styles.button, ...styles.buttonA, marginTop: 40 }}>
          <Text>Button A</Text>
        </TouchableOpacity>
      {/* <Text>Dimensions</Text>
      <Text>Width: {parseInt(Dimensions.get('window').width)} </Text>
      <Text>Height: {parseInt(Dimensions.get("window").height)} </Text>
      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <TouchableOpacity style={{ ...styles.button, ...styles.buttonA }}>
          <Text>Button A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.button, ...styles.buttonB }}>
          <Text>Button B</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default TopicDimensions;
