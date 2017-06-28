import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import VideoPlayerLayout from './layouts/VideoPlayerLayout.js';

//Scene
class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = { streamURL: "" }
  }

  componentWillMount() {
    this.setState({ streamURL: 'http://playertwitch.tv/?channel=' + this.props.streamID })
    //example: http://player.twitch.tv/?channel=beyondthesummit
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.props.env)}/>
        <VideoPlayerLayout
          streamURL={this.state.streamURL}
          showButton={this.props.showButton}
          text={this.props.text}
          changeScenes={this.props.changeScenes}
          scene={this.props.scene}
        />
      </View>
    )
  }
}

module.exports = VideoPlayer;
