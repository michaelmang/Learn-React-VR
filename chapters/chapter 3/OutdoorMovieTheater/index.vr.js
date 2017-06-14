import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
  VideoPano
} from 'react-vr';
import MainMenu from './Components/Scenes/MainMenu.js';
import MovieTheater from './Components/Scenes/MovieTheater.js';

export default class OutdoorMovieTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('fort-night.jpg')}>
          <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('fort-night-atmosphere.mp3')}}
          />
        </Pano>
        <MovieTheater/>
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
