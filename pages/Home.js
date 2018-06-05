import React from 'react';
import { View, Image } from 'react-native';
import { Font } from 'expo';
import SubmitButton from '../component/submit.button';
import TitleText from '../component/title.text';
import InfoText from '../component/info.text';
import styles from '../component/styles';
import LogoContainer from '../component/logo.container'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }

  static navigationOptions = {
    title: "Getting Started"
  }

  render() {
    return (
      <LogoContainer showBackground={true}>
        <TitleText text="Start Your Club"></TitleText>
              <InfoText text={this.state.text}></InfoText>
              <SubmitButton
                content= {'Get Started'}
                nextpage= {'UserSignup'}
                navigator= {this.props.navigation}
              />
      </LogoContainer>

      // <View style={styles.backgroundContainer}>
      //   <BackgroundImage/>
      //   <View style={styles.container}>
      //     <Image style={{width: 300, height: 80}}
      //       transform={[{scaleX: 0.4}, {scaleY: 0.4}]}
      //       source={require('../assets/images/logo-transparent.png')} />
            
      //       <View style={styles.content}>
      //       <TitleText text="Start Your Club"></TitleText>
      //         <InfoText text={this.state.text}></InfoText>
      //         <SubmitButton
      //           content= {'Get Started'}
      //           nextpage= {'UserSignup'}
      //           navigator= {this.props.navigation}
      //         />
      //       </View>
      //   </View>
        
      // </View>
    );
  }
}