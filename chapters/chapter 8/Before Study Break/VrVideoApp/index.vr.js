import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import TitleScene from './components/scenes/TitleScene.js';
import Dashboard from './components/scenes/Dashboard.js';

export default class VrVideoApp extends React.Component {
  render() {
    //<TitleScene showButton={true} text={"Watch a Video"}/>
    return (
      <View>
        <Dashboard showButton={false} text={"Select Environment"}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('VrVideoApp', () => VrVideoApp);
