import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>i am the footer</Text>
      </View>
    );
  }
}

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
    fontSize: 32,
    color: '#818282'
  },
  info: {
    fontSize: 14,
    color: '#818282',
    textAlign: 'center',
    padding: 20
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    width: 250,
    height: 64,
    backgroundColor: '#F313B7',
    borderRadius: 40
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
