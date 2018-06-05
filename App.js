import React from 'react';

import { createStackNavigator } from 'react-navigation'

import Home from './pages/Home';
import ChapterSignupForm from './pages/ChapterSignupForm';

export default class App extends React.Component {
  render() {
    return <Nav />;;
  }
}

const Nav = createStackNavigator(
  {
    Home: { screen: Home },
    ChapterSignupForm: { screen: ChapterSignupForm }
  },
  {
    initialRouteName: 'Home'
  }
);

