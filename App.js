import React from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'openSansRegular': require('./assets/fonts/openSansRegular.ttf'),
      'openSansLight': require('./assets/fonts/openSansLight.ttf'),
      'openSansSemiBold': require('./assets/fonts/openSansSemiBold.ttf'),
      'openSansBold': require('./assets/fonts/openSansBold.ttf'),
    });
    this.setState({ fontLoaded: true });
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
          source={require('./assets/images/fg-splash-bg.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={{width: 300, height: 80}}
            transform={[{scaleX: 0.4}, {scaleY: 0.4}]}
            source={require('./assets/images/logo-transparent.png')} />
            {
              this.state.fontLoaded ? (
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
              ) : null
            }
        </View>
        <Footer></Footer>
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
    fontFamily: 'openSansLight',
    fontSize: 40,
    color: '#818282'
  },
  info: {
    fontFamily: 'openSansSemiBold',
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
    shadowRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4
  },
  buttonText: {
    fontFamily: 'openSansBold',
    fontSize: 18,
    color: '#FFFFFF'
  }
});
