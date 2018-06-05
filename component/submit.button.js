import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

class SubmitButton extends Component {
    static propTypes = {
      content: PropTypes.string.isRequired,
      navigateTo: PropTypes.string.isRequired
    }

    render = () => {
        const { navigateTo, content } = this.props;
        
        return (
            <View>
                <TouchableOpacity style={styles.button}
                color="#FFFFFF"
                onPress={() => {
                    this.props.navigation.navigate({navigateTo});
                }}>
                <Text style={styles.buttonText}>{content}</Text>
                </TouchableOpacity>
            </View>
        );
      }
  }
  export default SubmitButton;