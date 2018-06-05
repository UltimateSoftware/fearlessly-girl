import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import styles from './styles';

class Logo extends Component {
    render = () => {        
        return (
            <Image style={{width: 300, height: 80}}
                transform={[{scaleX: 0.4}, {scaleY: 0.4}]}
                source={require('../assets/images/logo-transparent.png')} 
            />
        );
      }
  }
  export default Logo;