import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import DashboardLayout from './layouts/DashboardLayout.js';

//Scene
class Dashboard extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('dashboard-background.jpg')}/>
        <DashboardLayout
          environments={this.props.environments}
          captureSelection={this.props.captureSelection}
          previews={this.props.previews}
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}

module.exports = Dashboard;
