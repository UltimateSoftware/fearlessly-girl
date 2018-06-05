import React from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import SubmitButton from '../component/submit.button';
import styles from '../component/styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'openSansRegular': require('../assets/fonts/openSansRegular.ttf'),
      'openSansLight': require('../assets/fonts/openSansLight.ttf'),
      'openSansSemiBold': require('../assets/fonts/openSansSemiBold.ttf'),
      'openSansBold': require('../assets/fonts/openSansBold.ttf'),
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
          source={require('../assets/images/fg-splash-bg.jpg')}/>
        </View>
        <View style={styles.container}>
          <Image style={{width: 300, height: 80}}
            transform={[{scaleX: 0.4}, {scaleY: 0.4}]}
            source={require('../assets/images/logo-transparent.png')} />
            {
              this.state.fontLoaded ? (
              <View style={styles.content}>
                <Text style={styles.title}>Start Your Club</Text>
                <Text style={styles.info}>{this.state.text}</Text>
                <SubmitButton
                  content= {'Get Started'}
                  nextpage= {'UserSignup'}
                  navigator= {this.props.navigation}
                />
              </View>
              ) : null
            }
      </View>
      </View>
    );
  }
}