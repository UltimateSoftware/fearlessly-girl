import React from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15
        }}>
        <Image style={{ flex: 1 }}
          source={require('./assets/fg-splash-bg.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={{width: 300, height: 80}}
            transform={[{scaleX: 0.4}, {scaleY: 0.4}]}
            source={require('./assets/logo-transparent.png')} />
          <View style={styles.content}>
            <Text style={styles.title}>Start Your Club</Text>
            <Text style={styles.info}>{this.state.text}</Text>
            <View>
              <TouchableOpacity style={styles.button}
                color="#FFFFFF"
                onPress={() => {
                  Alert.alert('You tapped the button! You go Glen Coco!');
                }}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
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
  button: {
    margin: 20,
    padding: 20,
    width: 250,
    height: 64,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: '#F313B7',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
