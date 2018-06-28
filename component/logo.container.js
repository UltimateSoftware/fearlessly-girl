import React from 'react';
import { View, Image } from 'react-native';
import styles from '../component/styles';
import BackgroundImage from './background.image';

export default class LogoContainer extends React.Component {
    render() {
        let background;
        if (this.props.showBackground) {
            background = <BackgroundImage/>
        }
        
        return (
        <View style={styles.backgroundContainer}>
            {background}
            <View style={styles.container}>
            <Image style={{width: 300, height: 80}}
                transform={[{scaleX: 0.4}, {scaleY: 0.4}]}
                source={require('../assets/images/logo-transparent.png')} />
                <View style={styles.content}>
                {this.props.children}
                </View>
            </View>
        </View>
      );
    }
}