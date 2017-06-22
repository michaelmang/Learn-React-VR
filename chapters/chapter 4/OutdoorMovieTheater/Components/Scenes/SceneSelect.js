import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr';
import SceneSelectMenu from './Layouts/SceneSelectMenu.js';

//Scene
class SceneSelect extends React.Component {
  render() {
    return (
      <SceneSelectMenu text={this.props.text} buttonText={this.props.buttonText} updateScene={this.props.updateScene} scene={this.props.scene}/>
    )
  }
}

module.exports = SceneSelect;
