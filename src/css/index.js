import {StyleSheet} from 'react-native'
import {size, w, h} from '../myconstants'

export const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#30d0fe',
      justifyContent: 'center',
      paddingLeft: 22,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
    },
    textStyle: {
      color: '#fff',
      fontSize: 28,
      fontFamily: 'AvenirNext-DemiBold',
      paddingTop: 50,
    },
  });

  export const styles1 = StyleSheet.create({
    container: {
      width: w / 2.4,
      paddingVertical: 10
    },
    sub: {
      shadowColor: '#000',
      borderRadius: 10,
      backgroundColor: 'white',
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4
    },
    h1: {
      paddingTop: 10,
      fontFamily: 'AvenirNext-DemiBold',
      fontSize: 18,
      alignSelf: 'center',
      textAlign: 'center'
    },
    cover: {
      width: w / 2.4,
      height: w * 0.63,
      borderRadius: 10
    }
  })