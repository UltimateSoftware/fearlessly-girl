import React from 'react';
import { View, Image } from 'react-native';
import { Font } from 'expo';
import SubmitButton from '../component/submit.button';
import TitleText from '../component/title.text';
import InfoText from '../component/info.text';
import styles from '../component/styles';
import Logo from '../component/logo';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundImageContainer}>
          <Image style={{ flex: 1 }}
            source={require('../assets/images/fg-splash-bg.jpg')}/>
        </View>
        <View style={styles.container}>
          <Logo/>
            {
              this.state.fontLoaded ? (
              <View style={styles.content}>
                <Text style={styles.title}>Start Your Club</Text>
                <Text style={styles.info}>{this.state.text}</Text>
                <SubmitButton
                  content= {'Get Started'}
                  nextpage= {'ChapterSignupForm'}
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