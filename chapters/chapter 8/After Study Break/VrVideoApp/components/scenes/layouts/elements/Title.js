import React from 'react';
import {
  Text,
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

//Element
class Title extends React.Component {
  constructor() {
    super();
    this.state = { slideLeft: new Animated.Value(-1), fadeIn: new Animated.Value(0)};
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.ease
          }
        )
      ])
    ]).start();
  }

  render() {
    return (
      <View style={{ margin: 0.1}}>
      <Animated.Text
        style={{
          fontSize: 0.25,
          textAlign: 'center',
          color: "#FFFFFF",
          opacity: this.state.fadeIn,
          transform: [
            {translateX: this.state.slideLeft}
          ]
        }}>
        VR VIDEO APP
        </Animated.Text>
      </View>
    )
  }
}

module.exports = Title;
