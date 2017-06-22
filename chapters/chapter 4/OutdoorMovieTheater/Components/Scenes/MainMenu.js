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
      <MainMenuContainer text={this.props.text} buttonText={this.props.buttonText} updateScene={this.props.updateScene} scene={this.props.scene}/>
    )
  }
}

module.exports = MainMenu;
