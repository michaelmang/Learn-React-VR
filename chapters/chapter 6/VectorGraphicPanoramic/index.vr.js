import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

export default class VectorGraphicPanoramic extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('poly-background.png')}/>
        <Image
          style={{
            height: 1,
            width: 1.6,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}]
          }}
          source={asset('koala.png')}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('VectorGraphicPanoramic', () => VectorGraphicPanoramic);
