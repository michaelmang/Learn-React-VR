import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

//Element
class TileButtons extends React.Component {

  render() {
    return (
      <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderWidth: this.props.borderWidths[0],
              borderColor: "#A482DF",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(1) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF",
                }}>

              </Text>
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderWidth: this.props.borderWidths[1],
              borderColor: "#A482DF",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(2) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderWidth: this.props.borderWidths[2],
              borderColor: "#A482DF",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(3) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderWidth: this.props.borderWidths[3],
              borderColor: "#A482DF",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(4) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderWidth: this.props.borderWidths[4],
              borderColor: "#A482DF",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(5) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderWidth: this.props.borderWidths[5],
              borderColor: "#A482DF",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(6) }>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: "#FFFFFF"
                }}>

              </Text>
            </VrButton>
          </View>
        </View>

     </View>
    )
  }
}

module.exports = TileButtons;
