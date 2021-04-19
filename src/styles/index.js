import { StyleSheet } from 'react-native'

const spacer = 4;

export const padding = StyleSheet.create({
  p1: {
    padding: spacer
  },
  p2: {
    padding: spacer * 2
  },
  p3: {
    padding: spacer * 4
  },
  p4: {
    padding: spacer * 8
  },
  p5: {
    padding: spacer * 16
  },
  // pt1: {
  //   paddingTop: 4
  // },
  // py1 : {
  //   paddingVertical: 4
  // }
})

export const margin = StyleSheet.create({
  m1: {
    margin: spacer
  },
  m2: {
    margin: spacer * 2
  },
  m3: {
    margin: spacer * 4
  },
  m4: {
    margin: spacer * 8
  },
  m5: {
    margin: spacer * 16
  }
})

