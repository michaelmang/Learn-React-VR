import React from 'react';
import {
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

import MenuButtons from './elements/MenuButtons.js';
import TileButtons from './elements/TileButtons.js';
import ProgressCircles from './elements/ProgressCircles.js';

import Button from './elements/Button.js';

//Layout
class DashboardLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideLeft: new Animated.Value(-1),
      fadeIn: new Animated.Value(0),
      showButton: false,
      color1: "#A482DF",
      color2: "#DBDAF1",
      text: this.props.text,
      borderWidths: [0, 0, 0, 0, 0, 0],
      selectionIndex: "",
      stage: 1
    };
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

  updateStage(input) {
    if(this.state.showButton === false) {
      this.setState({showButton: true});
    }

    switch (input) {
      case 1:
        this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0], selectionIndex: 1});
        break;
      case 2:
        this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0], selectionIndex: 2});
        break;
      case 3:
        this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0], selectionIndex: 3});
        break;
      case 4:
        this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0], selectionIndex: 4});
        break;
      case 5:
        this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0], selectionIndex: 5});
        break;
      case 6:
        this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05], selectionIndex: 6});
        break;
    }
  }

  updateScene() {
    this.props.captureSelection(this.state.stage, this.state.selectionIndex);
    this.setState({color1: "#DBDAF1", color2: "#A482DF", text: "Watch Video", stage: 2});
  }

  render() {
    return (
      <View>
        <Animated.View
          style={{
            width: 5,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            layoutOrigin: [0.5, 0.5],
            opacity: this.state.fadeIn,
            transform: [
              {translateX: this.state.slideLeft},
              {translateZ: -3}
            ],
            marginTop: -0.3
          }}
        >
          <MenuButtons/>
          <TileButtons
            stage={this.state.stage}
            environments={this.props.environments}
            previews={this.props.previews}
            updateStage={this.updateStage.bind(this)}
            borderWidths={this.state.borderWidths}
          />
          <ProgressCircles color1={this.state.color1} color2={this.state.color2}/>
        </Animated.View>

        <View style={{
          width: 5,
          height: 0.5,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -3]}],
          marginTop: -0.7
        }}>
        <Button
          updateScene={this.updateScene.bind(this)}
          showButton={this.state.showButton}
          text={this.state.text}
          changeScenes={this.props.changeScenes}
          stage={this.state.stage}
          scene={this.props.scene}
          selectionIndex={this.state.selectionIndex}
        />
        </View>
      </View>
    )
  }
}

module.exports = DashboardLayout;
