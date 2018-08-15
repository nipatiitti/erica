import React, { Component } from 'react'
import {
  Text
} from 'react-native'

import { createStackNavigator } from 'react-navigation'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import Main from './src/containers/MainContainer'

const Navigator = createStackNavigator({
  Home: {
    screen: Main
  },
},{
  initialRouteName: 'Home',
})

export default class App extends Component {
  render() {
    const { store, persistor } = this.props
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}
