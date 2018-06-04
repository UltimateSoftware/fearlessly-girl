import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class UserSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Test Input' };
      }

    render() {
        return (
            <View style={styles.container}>
            {/* <Image/> */}
            <TextInput 
                value={this.state.text} 
                onChangeText={(text) => this.setState({text})}
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });