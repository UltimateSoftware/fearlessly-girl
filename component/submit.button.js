import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import styles from './styles';

class SubmitButton extends Component {
    static propTypes = {
      content: PropTypes.string.isRequired,
      nextpage: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired
    }

    render = () => {
        const { nextpage, content, navigator } = this.props;
        
        return (
            <View>
                <TouchableOpacity style={styles.button}
                color="#FFFFFF"
                onPress={() => {
                    navigator.navigate(nextpage);
                }}>
                <Text style={styles.buttonText}>{content}</Text>
                </TouchableOpacity>
            </View>
        );
      }
  }
  export default SubmitButton;