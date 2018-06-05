import React from 'react';

import { createSwitchNavigator } from 'react-navigation';

import UserSignup from './pages/UserSignup';
import Home from './pages/Home';
import ChapterSignupChecklist from './pages/usersignup/ChapterSignupChecklist';

export default class App extends React.Component {
  render() {
    return <Nav />;
  }
}

const Nav = createSwitchNavigator(
  {
    Home: { screen: Home },
    UserSignup: { screen: UserSignup },
    ChapterCreationChecklist: { screen: ChapterSignupChecklist }
  },
  {
    initialRouteName: 'Home'
  }
);

