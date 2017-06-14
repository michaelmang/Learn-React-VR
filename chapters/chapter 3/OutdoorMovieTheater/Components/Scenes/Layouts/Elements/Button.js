import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

//Element
class Button extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#1AC8F7'}}>
        <VrButton>
          <Text style={{fontSize: 0.2, textAlign: 'center'}}>
          Select a Movie
          </Text>
        </VrButton>
      </View>
    )
  }
}

module.exports = Button;
