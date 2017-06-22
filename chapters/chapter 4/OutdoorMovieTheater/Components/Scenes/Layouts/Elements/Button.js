import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

//Element
class Button extends React.Component {
  render() {
    const scene = this.props.scene;
    return (
      <View>
        <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#1AC8F7'}}>
          {scene === 1 ? (
            <VrButton onClick={() => this.props.updateScene(2)}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>
              {this.props.buttonText}
              </Text>
            </VrButton>
          ) : (
            <VrButton onClick={() => this.props.updateScene(3)}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>
              {this.props.buttonText}
              </Text>
            </VrButton>
          )}
        </View>
      </View>
    )
  }
}

module.exports = Button;
