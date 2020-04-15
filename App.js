import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import {styles,styles1} from './src/css/index'
import Header from './components/Header'
import Movielist from './components/Movielist'

const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Welcome",
      data: []
    }
  }


  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
      console.log({ data })
    }
    catch (e) {
      console.log('URL is wrong or Internet disconnected')
    }
  }

  render() {
    const { title, data } = this.state
    return (

      <View>
        <Header title={title} />
        <ScrollView>
          <View style={styles2.container}>
            {data.map(item => (
              <Movielist data={item} key={item.id} />))}
          </View>
        </ScrollView>
      </View>
    )
  }

}


const styles2 = StyleSheet.create({
  container: {
    marginTop: 31
  }
})