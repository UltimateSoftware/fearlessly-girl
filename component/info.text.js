import React from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';
import styles from './styles';

export default class InfoText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fontLoaded: false,
        text: props.text
      }
    }
    async componentDidMount() {
      await Font.loadAsync({
        'openSansSemiBold': require('../assets/fonts/openSansSemiBold.ttf')
      });
      this.setState({ fontLoaded: true });
    }
    render() {
        return (
            <View>
            {
                this.state.fontLoaded ? (
                    <Text style={styles.info}>{this.state.text}</Text>
                ) : null
            }
            </View>
        )
    }
}