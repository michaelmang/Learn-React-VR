import React from 'react';
import {
  Text,
  View,
} from 'react-vr';
import MainMenuContainer from './Layouts/MainMenuContainer.js';

//Scene
class MainMenu extends React.Component {
  render() {
    return (
      <MainMenuContainer/>
    )
  }
}

module.exports = MainMenu;
