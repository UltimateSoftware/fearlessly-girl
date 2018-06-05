import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, TextInput } from 'react-native';
import { Font } from 'expo';
import styles from './styles';

class GenericInput extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired
    }

    render = () => {
        const { title, placeholder } = this.props;
        
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{title}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text})}
                        placeholder= {placeholder}
                        controlled={true}
                    />
                <View
                    style={{
                        borderBottomColor: '#335F69',
                        borderBottomWidth: 1,
                        width: '100%'
                    }}
                />
            </View>
        );
      }
  }
  export default GenericInput;