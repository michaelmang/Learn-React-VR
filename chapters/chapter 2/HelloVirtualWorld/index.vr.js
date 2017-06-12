import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class HelloVirtualWorld extends React.Component {

  render() {
    return (
      <View>
        <Pano source={asset('horseshoe-bend.jpg')}/>
        <NestedMessage/>
      </View>
    );
  }
};

class NestedMessage extends React.Component {
  constructor() {
    super();
    this.state = {message: "Hello State Message", showMessage: true};
    /* setInterval(() => {
      this.setState({ message: "Hello Updated Message" });
    }, 5000);
    */
  }

  componentDidMount () {
    this.setState({ showMessage: false });
  }

  handleClick () {
    this.setState({ message: "Updated Message" });
  }

  render() {
    const showMessage = this.state.showMessage;

    return (
      <View>
        {showMessage ? (
          <VrButton
            onClick={this.handleClick.bind(this)}
          >
            <Text
              style={{
                backgroundColor: '#777879',
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -5]}],
              }}
              >
            {this.state.message}
            </Text>
          </VrButton>
        ) : (
          <Text></Text>
        )}
      </View>
    );
  }
};


AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
