import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'

import {store, persistor} from './src/config/configStore'


const AppContainer = () => (
    <App store={store} persistor={persistor} />
)

AppRegistry.registerComponent('Turkubus', () => AppContainer)
