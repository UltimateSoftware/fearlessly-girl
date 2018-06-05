import React from 'react';

import { createStackNavigator } from 'react-navigation'

import UserSignup from './pages/UserSignup';
import Home from './pages/Home'

export default class App extends React.Component {
  render() {
    return <Nav />;;
  }
}

const Nav = createStackNavigator(
  {
    Home: { screen: Home },
    UserSignup: { screen: UserSignup },
  },
  {
    initialRouteName: 'Home'
  }
);

