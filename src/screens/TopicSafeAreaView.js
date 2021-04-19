import React from 'react'
import { Text, View, SafeAreaView, StatusBar, Platform } from 'react-native'
import SafeViewGlobal from '../components/General/SafeViewGlobal'

const TopicSafeAreaView = () => {
  return (
    <SafeViewGlobal>
      <Text>Safe Area View</Text>
    </SafeViewGlobal>
  )
}

export default TopicSafeAreaView;