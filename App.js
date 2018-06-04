import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
interface Props {} // 1
interface State { // 2
    name: string
}
export default class App extends Component<Props, State> { // 3
    state = { name: 'Nader' } // 4
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Welcome {this.state.name}! // 5
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})