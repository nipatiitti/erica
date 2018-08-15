import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'

import styles from '../../styles/Main'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Welcome'
    }

    componentDidMount = () => {
        if (this.props.stop) {
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Yaiii</Text>
            </View>
        )
    }
}