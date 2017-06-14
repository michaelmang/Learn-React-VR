import React from 'react';
import {
  Text,
  View,
} from 'react-vr';

//Element
class Title extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 0.5}}>
        <Text
          style={{
            fontSize: 0.5,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>
          Outdoor Movie Theater
        </Text>
      </View>
    )
  }
}

module.exports = Title;
