import React from 'react';
import { StyleSheet, Text, Button, View, Image } from 'react-native';

export default class UserSignup extends React.Component {
    static navigationOptions = {
      title: "Login"
    }
    constructor(props) {
        super(props);
        this.state = { text: 'Test Input' };
      }

    render() {
        return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
            <View style={{
            position: 'absolute',
            top: 0,
            left: -100,
            width: '100%',
            height: '100%',
            opacity: 0.15
            }}>
                <Image style={{ flex: 1 }} 
                source={require('../assets/fg-splash-bg.jpg')}/>
            </View>
            <View style={styles.container}>
                <Image style={{width: 300, height: 80}} 
                transform={[{scaleX: 0.4}, {scaleY: 0.4}]} 
                source={require('../assets/logo-transparent.png')} />
            <View style={styles.content}>
                <Button title="Login with Facebook" onPress={() => console.log('Login with Facebook')}/>
                <Button title="Login with Twitter" onPress={() => console.log('Login with Twitter')}/>
                <Button title="Login with Google" onPress={() => console.log('Login with Google')}/>
          </View>
        </View>
      </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
      },
      content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
      title: {
        fontSize: 32,
        color: '#818282'
      },
      info: {
        fontSize: 14,
        color: '#818282',
        textAlign: 'center',
        padding: 20
      },
      buttonContainer: {
        margin: 20,
        padding: 10,
        width: 250,
        height: 64,
        backgroundColor: '#F313B7',
        borderRadius: 40
      },
      button: {
        fontSize: 18,
        fontWeight: 'bold'
      }
  });