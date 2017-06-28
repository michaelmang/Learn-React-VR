import React from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  asset
} from 'react-vr';

//Element
class TileButtons extends React.Component {

  render() {
    const stage = this.props.stage;
    return (
      <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(1) }>
            {stage === 1 ? (
              <Image
                source={{uri: this.props.previews[0]}}
                style=
                {{
                  width: 1,
                  height: 0.6,
                  borderWidth: this.props.borderWidths[0],
                  borderColor: "#A482DF"
                }}
              />
            ): (
              <Image
                source={asset(this.props.environments[0])}
                style=
                {{
                  width: 1,
                  height: 0.6,
                  borderWidth: this.props.borderWidths[0],
                  borderColor: "#A482DF"
                }}
              />
            )}
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(2) }>
            {stage === 1 ? (
              <Image
                source={{uri: this.props.previews[1]}}
                style=
                {{
                  width: 1,
                  height: 0.6,
                  borderWidth: this.props.borderWidths[1],
                  borderColor: "#A482DF"
                }}
              />
            ): (
              <Image
                source={asset(this.props.environments[1])}
                style=
                {{
                  width: 1,
                  height: 0.6,
                  borderWidth: this.props.borderWidths[1],
                  borderColor: "#A482DF"
                }}
              />
            )}
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(3) }>
              {stage === 1 ? (
                <Image
                  source={{uri: this.props.previews[2]}}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[2],
                    borderColor: "#A482DF"
                  }}
                />
              ): (
                <Image
                  source={asset(this.props.environments[2])}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[2],
                    borderColor: "#A482DF"
                  }}
                />
              )}
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(4) }>
              {stage === 1 ? (
                <Image
                  source={{uri: this.props.previews[3]}}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[3],
                    borderColor: "#A482DF"
                  }}
                />
              ): (
                <Image
                  source={asset(this.props.environments[3])}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[3],
                    borderColor: "#A482DF"
                  }}
                />
              )}
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(5) }>
              {stage === 1 ? (
                <Image
                  source={{uri: this.props.previews[4]}}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
              ): (
                <Image
                  source={asset(this.props.environments[4])}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[4],
                    borderColor: "#A482DF"
                  }}
                />
              )}
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#CAB9E5",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(6) }>
              {stage === 1 ? (
                <Image
                  source={{uri: this.props.previews[5]}}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[5],
                    borderColor: "#A482DF"
                  }}
                />
              ): (
                <Image
                  source={asset(this.props.environments[5])}
                  style=
                  {{
                    width: 1,
                    height: 0.6,
                    borderWidth: this.props.borderWidths[5],
                    borderColor: "#A482DF"
                  }}
                />
              )}
            </VrButton>
          </View>
        </View>

     </View>
    )
  }
}

module.exports = TileButtons;
