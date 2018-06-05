import React from 'react';
import { Button, View, Image } from 'react-native';
import styles from '../component/styles';

export default class UserSignup extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = {
      title: "Login"
    }

    render() {
      return (
        <View style={styles.backgroundContainer}>
            <View style={styles.backgroundImageContainer}>
                <Image style={{ flex: 1 }} 
                source={require('../assets/images/fg-splash-bg.jpg')}/>
            </View>
            <View style={styles.container}>
                <Image style={{width: 300, height: 80}} 
                transform={[{scaleX: 0.4}, {scaleY: 0.4}]} 
                source={require('../assets/images/logo-transparent.png')} />
            <View style={styles.content}>
              <Button title="Login with Facebook" onPress={() => {
                alert('Login with Facebook');
              }} />
              <Button title="Login with Twitter" onPress={() => {
                alert('Login with Twitter');
              }}/>
              <Button title="Login with Google" onPress={() => {
                alert('Login with Google');
              }}/>
            </View>
          </View>
        </View>
      );
    }
}