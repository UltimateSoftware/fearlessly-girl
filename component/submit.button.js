import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import styles from './styles';

class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontLoaded: false
        }
      }
    static propTypes = {
      content: PropTypes.string.isRequired,
      nextpage: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired
    }
    async componentDidMount() {
        await Font.loadAsync({
            'openSansBold': require('../assets/fonts/openSansBold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }
    render = () => {
        const { nextpage, content, navigator } = this.props;
        
        return (
            <View>
                {
                    this.state.fontLoaded ? (
                    <TouchableOpacity style={styles.button}
                    color="#FFFFFF"
                    onPress={() => {
                        navigator.navigate(nextpage);
                    }}>
                    <Text style={styles.buttonText}>{content}</Text>
                    </TouchableOpacity>
                    ) : null
                }
            </View>
        );
      }
  }
  export default SubmitButton;