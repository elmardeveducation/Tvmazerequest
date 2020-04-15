import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'
import {styles1} from '../src/css'



const Movielist = ({ data }) => {
  const { container, sub, h1, cover } = styles1
  const { image, info } = data
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: image }} />
      </View>
      <Text style={h1}>{info.toUpperCase()}</Text>
    </View>
  )
}

export default Movielist


