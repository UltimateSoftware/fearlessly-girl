import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import styles from '../component/styles';

export default class BackgroundImage extends React.Component {
    render() {
        return(
            <View style={styles.backgroundImageContainer}>
                <Image style={{ flex: 1 }}
                source={require('../assets/images/fg-splash-bg.jpg')}/>
            </View>
        );
    }
}