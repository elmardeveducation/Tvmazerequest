import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../src/css'

const Header = props => {
  //const {viewStyle, textStyle} = styles;
  // console.log("title=" +this.title)
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

export default Header

