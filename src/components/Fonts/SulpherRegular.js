import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {AppLoading} from 'expo'
import * as Font from "expo-font";

export class SulpherRegular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Bask': require("../../../assets/fonts/SulphurPoint-Regular.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    return (
        <>
        {this.state.fontLoaded ? <Text style = {{fontFamily : 'Bask',...this.props.style}}>{this.props.text}</Text> : <AppLoading />}
        </>
    );
  }
}

export default SulpherRegular;
