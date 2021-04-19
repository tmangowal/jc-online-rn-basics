import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { typography } from '../styles/typography'
import { H1, H2 } from '../components/Typography'

const CustomFonts = () => {
  return (
    <View>
      <Text>Regular Font</Text>
      <Text style={{ ...typography.h1Regular }} >Custom Font</Text>
      <H1>Di sini props</H1>
      <H1 bold>Di sini props bold</H1>
      {/* <H1 size={20} color="red">H1 ganti warna</H1> */}
      <H2 color="blue" >Ini component H2</H2>
    </View>
  )
}

export default CustomFonts;