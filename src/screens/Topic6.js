import React from 'react'
import { View, Text, Image } from 'react-native'
import LandscapeImg from '../assets/images/landscape.jpg'

// https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg

const Topic6 = () => {
  return (
    <View>
      <Text>Topic 6</Text>
      <Image 
      source={LandscapeImg} 
      style={{ width: 200, height: 200, resizeMode: "contain" }} 
      />
      {/* <Image 
      source={{ uri: "https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg" }} 
      style={{ width: 200, height: 200, resizeMode: "contain" }} 
      /> */}
    </View>
  )
}

export default Topic6