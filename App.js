import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import Topic123 from './src/screens/Topic123'
import Topic4 from './src/screens/Topic4';
import Topic5 from './src/screens/Topic5';
import Topic6 from './src/screens/Topic6';
import TopicScrollview from './src/screens/TopicScrollview';
import KeyboardView from './src/screens/KeyboardView'
import TopicDimensions from './src/screens/Dimensions'
import CustomFonts from './src/screens/CustomFonts'
import TopicSafeAreaView from './src/screens/TopicSafeAreaView'


const App = () => {
  return (
    <View>
      <StatusBar translucent />
      <TopicSafeAreaView />
    </View>
  );
};

export default App;
