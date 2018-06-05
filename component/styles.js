import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    title: {
      fontFamily: 'openSansLight',
      fontSize: 40,
      color: '#818282'
    },
    info: {
      fontFamily: 'openSansSemiBold',
      fontSize: 14,
      color: '#818282',
      textAlign: 'center',
      padding: 20
    },
    button: {
      margin: 20,
      padding: 20,
      width: 250,
      height: 64,
      borderRadius: 40,
      alignItems: 'center',
      backgroundColor: '#F313B7',
      shadowRadius: 8,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.4
    },
    buttonText: {
      fontFamily: 'openSansBold',
      fontSize: 18,
      color: '#FFFFFF'
    }
  }
  );

  export default styles;