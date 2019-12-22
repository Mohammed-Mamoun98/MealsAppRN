import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Font from "expo-font";

export class Sulpher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Bask': require("../../../assets/fonts/SulphurPoint-Light.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    return (
        <>
        {this.state.fontLoaded ? <Text style = {{fontFamily : 'Bask',...this.props.style}}>{this.props.text}</Text> : null}
        </>
    );
  }
}

export default Sulpher;
