import React from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';
import styles from './styles';

export default class TitleText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fontLoaded: false,
        text: props.text
      }
    }
    async componentDidMount() {
      await Font.loadAsync({
        'openSansLight': require('../assets/fonts/openSansLight.ttf')
      });
      this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <View>
            {
                this.state.fontLoaded ? (
                    <Text style={styles.title}>{this.state.text}</Text>
                ) : null
            }
            </View>
        )
    }
}