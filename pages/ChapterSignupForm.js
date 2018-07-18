import React from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, TextInput } from 'react-native';
import { Font } from 'expo';
import SubmitButton from '../component/submit.button';
import styles from '../component/styles';
import Logo from '../component/logo';
import GenericInput from '../component/generic.input';

export default class ChapterSignupForm extends React.Component {
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
        </View>
          <Logo />
          <GenericInput
          title= 'Input Field'
          placeholder= 'enter input'
          />
          <GenericInput
          title= 'Input Field'
          placeholder= 'enter input'
          />
          <GenericInput
          title= 'Input Field'
          placeholder= 'enter input'
          />
          <GenericInput
          title= 'Input Field'
          placeholder= 'enter input'
          />
        <View style={styles.content}>

            <SubmitButton
                content= {'Register'}
                nextpage= {'ChapterSignupConfirmation'}
                navigator= {this.props.navigation}
            />
            </View>
            
      </View>
    );
  }
}